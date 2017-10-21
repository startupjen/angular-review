angular.module('app')
  .component('cohortRosterEntry', {
    controller: function() {

    },
    bindings: {
      engineer: '<'
    },
    template: `
      <div class="cohort-list-entry">
        <div class="engineer-photo"><img src="{{$ctrl.engineer.image}}"/></div>
        <div class="engineer-name">{{$ctrl.engineer.name}}</div>
        <div class="engineer-email">{{$ctrl.engineer.email}}</div>
      </div>
    `
  })