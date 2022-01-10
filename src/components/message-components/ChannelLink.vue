<template>
  <div class="channel-link-wrapper">
    <div class="border-left"></div>
    <div class="box-body">
      <div class="channel-header">
        <p><span class="channel-tag">#{{ title }}</span> &minus; {{ memberCount }} members</p>
      </div>
      <div class="channel-description">
        <span>{{ description }}</span>
      </div>
      <div class="channel-join">
        <button type="button">Join Channel</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChannelLink',
  props: ['titleData', 'memberCountData', 'descriptionData'],
  data() {
    return {
      title: this.titleData,
      memberCount: parseInt(this.memberCountData, 10).toLocaleString(),
      description: this.descriptionData,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

.channel-link-wrapper {
  display: flex;
  color: $dark;
  background-color: $bg-light;
  margin-bottom: .5rem;
}

.border-left {
  width: 8px;
  border-radius: 8px;
  height: auto;
  background-color: $green-accent;
  margin-right: .75rem;
}

.box-body {
  padding: .5rem 0;
  display: flex;
  flex-direction: column;
}

.channel-header p {
  letter-spacing: -0.64px;
  margin-bottom: 8px;
}

.channel-tag {
  background-color: $channel-tag-bg;
  color: $channel-tag-text;
  font-weight: 700;
  padding: 4px;
  border-radius: 4px;
}

.channel-description {
  font-size: 1rem;
  letter-spacing: -0.5px;
  margin-bottom: 12px;
}

.channel-join {}

.channel-join button {
  padding: 0.625rem 1rem;
  border-radius: 8px;
  border: 2px solid $green-border;
  color: $green-text;
  font-weight: 700;
  font-size: 0.875rem;
  background-color: transparent;
}

</style>
