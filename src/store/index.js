import { createStore } from 'vuex';

export default createStore({
  state: {
    channels: [
      {
        title: 'intro',
        posts: [
          {
            postNum: 1,
            id: 'intro-message-1',
            user: 'Ashely Porciuncula',
            timestamp: '11:34 AM',
            body: [
              'Hello everyone! I\'m Ashely, co-founder of Orbital. Our virtual offices are a whole new take on remote communication. Pop in for meetings, quick chats, open-door office hours, or cowork together through the day - all in the same open 24/7 space.<br />I\'m also a developer, parent, foodie, and board + video gamer. Looking forward to getting to know the community here!',
            ],
          },
          {
            postNum: 2,
            id: 'intro-message-2',
            user: 'Ashely Porciuncula',
            timestamp: '11:37 AM',
            body: [
              '<a href="/">Click me</a> for some cool guides on how to center a div!',
            ],
          },
          {
            postNum: 3,
            id: 'intro-message-3',
            user: 'Da Hedgey',
            timestamp: '12:37 AM',
            body: [
              'How do you center a div though?',
            ],
          },
        ],
      },
    ],
    users: [{
      name: 'Slackbot',
      'direct-messages': [
        {
          type: 'top',
          body: [
            'You\'re here! Hello!<br />To learn all about using Slack, click the help icon in the top right corner of the app. (Or, you can visit the <a href="/">Help Center</a> on the web!)<br />I, however, am not a human. Just a bot (a simple bot, with only a few tricks up my metaphorical sleeve). But I\'m still happy you\'re here!',
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
    addChannelPost(state, postData) {
      console.log(postData);
      const { channel, post } = postData;
      const channelIndex = state.channels.findIndex((c) => c.title === channel);
      if (channelIndex === -1) {
        throw new Error('Channel not found!');
      }
      const postNum = state.channels[channelIndex].posts.length;
      const id = `${channel} message ${post.postNum}`;

      const updPost = {
        channel: postData.channel,
        body: [postData.post],
        user: postData.user,
        timestamp: postData.timestamp,
        id,
        postNum,
      };

      const prevPosts = state.channels[channelIndex].posts;

      state.channels[channelIndex].posts = [...prevPosts, updPost];
    },
  },
  actions: {
  },
  modules: {
  },
});
