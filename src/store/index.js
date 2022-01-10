import { createStore } from 'vuex';

export default createStore({
  state: {
    users: [{
      name: 'Slackbot',
      'direct-messages': [
        {
          type: 'top',
          body: [
            "You're here! Hello!",
            `To learn all about using Slack, click the help icon in the top right corner of the app.
            (Or, you can visit the <a href="/">Help Center</a> on the web!)`,
            `I, however, am not a human. Just a bot (a simple bot, with only a few tricks up my
            metaphorical sleeve). But I'm still happy you're here!`,
          ],
        },
        {
          type: 'message',
          date: 'June 9th, 2021',
          time: '9:27 AM',
          body: [
            'To get the most out of Slack, it\'s good to be where the conversation\'s happening - in channels! You can always browse a full list by choosing Channels on the left, or try checking out a few we recommend:',
          ],
          channelLinks: [
            {
              title: 'job-board',
              members: '8905',
              description: 'Popular channel on iOS Developers',
            },
            {
              title: 'architecture',
              members: '6660',
              description: 'Popular channel on iOS Developers',
            },
            {
              title: 'career-advice',
              members: '4151',
              description: 'Popular channel on iOS Developers',
            },
          ],
        },
      ],
    }],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
