angular.module('app')
  .service('gCal', function($http) {
    this.createEvent = (params) => {
      $http.post(url, params
      ).then( (response) => {
        console.log('GOOGLE CALENDAR EVENT CREATED!!! ', JSON.stringify(response))
      })
    }
  })
  .component('randomPairsList', {
    controller: function($http) {

      this.pairs = []
      
      this.generateRandomPairs = () => {
        const pairs = []
        const engineers = cohort.slice() 

        while ( engineers.length > 0 ) {  
          let max = Math.floor( engineers.length - 1 )
          let random = Math.floor( Math.random() * (max + 1) )
          const engineer1 = engineers.splice(random, 1)[0]
          const newPair = {}
          newPair.engineer1 = engineer1
    
          // to handle odd cohort sizes
          if (engineers.length > 0) {
            max = Math.floor( engineers.length - 1 )
            random = Math.floor( Math.random() * (max + 1) )
            const engineer2 = engineers.splice(random, 1)[0] || null
            newPair.engineer2 = engineer2
          }
    
          this.pairs.push(newPair)
        }
      }

      this.spamCalendars = () => {
        // const { calendarEvent, timeSlots, url } = require('../seed/calendar')
        for (let i = 0; i < this.pairs.length; i++) {
          let summary
          let attendees
    
          this.pairs[i].engineer2 ? summary = `Weekly Code Review w/Jen (${this.pairs[i].engineer1.name}/${this.pairs[i].engineer2.name})` : summary = `Weekly Code Review w/Jen (${this.pairs[i].engineer1.name})`
          this.pairs[i].engineer2 ? attendees = [{email: "jentran39+double@gmail.com"}, {email: "jen@jentran.co"}] : attendees = [{email: "jentran39+single@gmail.com"}]
        
          const calendarInvite = Object.assign( {}, calendarEvent, { start: timeSlots[i].start, end: timeSlots[i].end, summary, attendees } )
          
          $http.post(url, calendarInvite).then( (response) => console.log('GOOGLE CALENDAR EVENT CREATED!!! ', JSON.stringify(response)) )
          
          // gCal.createEvent(calendarInvite)
          //axios.post(url, calendarInvite).then( (response) => console.log('spamCalendars() - SUCCESS!! ', summary, ' response is ', response) )
        }

      }

      this.handleClickGenerateNewPairs = () => {
        this.generateRandomPairs()
      }

      this.handleClickSpamDemCalenders = () => {
        this.spamCalendars()
      }

    },
    template: `
      <div class="pairs-list">
        <button class="btn" ng-click="$ctrl.handleClickGenerateNewPairs()">Generate Random Pairs!!!</button>
        <button class="btn" ng-click="$ctrl.handleClickSpamDemCalenders()">Spam Dem Calendars!!!</button>
        <ul>
          <li ng-repeat="pair in $ctrl.pairs" pair="pair">{{pair.engineer1.name + (pair.engineer2 ? '/' + pair.engineer2.name: '')}}</li>
        </ul>
      </div>
    `
  })