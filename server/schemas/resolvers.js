const { AuthenticationError } = require('apollo-server-express');
const { User, Trip } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');
        return userData;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    trips: async () => {
      return await Trip.find({})
    },

    trip: async(parent, { tripId }) => {
      return Trip.findOne({ _id: tripId });
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

    addTrip: async (parent, { note, location }, context) => {
        if (context.user){
          const user = await User.findById(context.user._id);

          if (!user) {
            throw new AuthenticationError('No user found');
          }
          
          const trip = await Trip.create({note: note, location: location, userId: user._id});
          await User.findByIdAndUpdate({ _id: user._id }, { $addToSet: { trips: trip._id } }, { new: true })

          return trip;
        }
        else {
          throw new AuthenticationError('No user found');
        }
    },
    
    removeTrip: async (parent, args, context) => {
      if (context.user){
        const user = await User.findById(context.user._id);

        if (!user) {
          throw new AuthenticationError('No user found');
        }
        
        const trip = await 
          Trip.findOneAndDelete({ userId: user._id, _id: args.tripId })
            .then(async (trip) => {
              await User.findOneAndUpdate(
                { trips: trip._id },
                { $pull: { trips: trip._id } },
                { new: true }
              )

              return trip;
            });

        return trip;
      } else {
          throw new AuthenticationError('No user found');
        }
    },

    updateTrip: async (parent, { location, note, tripId }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);

        if (!user) {
          throw new AuthenticationError('No user found');
        }

        return Trip.findOneAndUpdate(
          { userId: user._id, _id: tripId }, 
          {location: location, note: note },
          { new: true }
        )
      }  else {
        throw new AuthenticationError('No user found');
      }
    },
  }
} 

module.exports = resolvers;
                                        