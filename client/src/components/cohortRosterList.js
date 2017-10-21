angular.module('app')
  .component('cohortRosterList', {
    controller: function() {
      this.title = 'HRLA18'
      this.cohort = cohort.slice()
    },
    template: `
      <div class="center">
      <div class="cohort-list-title">{{$ctrl.title}}, Group Size: {{$ctrl.cohort.length}}</div>
        <div class="grid">
          <cohort-roster-entry ng-repeat="engineer in $ctrl.cohort" engineer="engineer"></cohort-roster-entry>
        </div>
      </div>
    `
  })