<template>
  <nav class="top-bar">
    <div class="left"></div>
    <div class="center">
      <span> </span>
      <span> -> </span>
      <span>O</span>
      <input type="search" name="search" id="search" placeholder="Search iOS Developers" />
    </div>
    <div class="right"></div>
  </nav>
</template>

<script>
export default {
  name: 'Topbar',
};
</script>

<style lang="scss" scoped>
@import '../assets/css/variables.scss';

.top-bar {
  padding: 4px 0;
  background-color: $topbar;
  display: flex;
  justify-content: space-between;
}

.center input {
  width: 732px;
  text-align: center;
  background-color: $light-purple;
  border-radius: 8px;
  border: none;
  color: $white;
  font-size: .75rem;
  padding: 6px 0;

  &::placeholder {
    color: $white;
  }
}
</style>
