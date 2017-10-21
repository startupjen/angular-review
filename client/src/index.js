angular.module('app', [])
  .component('main', {
    controller: function() {
      this.title = 'Random Calendar Spammer'
    },
    template: `
    <div class="app-div">
      <div class="title">{{$ctrl.title}}</div>
      <div class="grid-top">
        <random-pairs-list></random-pairs-list>
        <calendar></calendar>
      </div>
      <cohort-roster-list></cohort-roster-list>
    </div>
    `
  })