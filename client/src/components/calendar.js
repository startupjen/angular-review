angular.module('app')
  .component('calendar', {
    template: `
      <div>
        <iframe src="https://calendar.google.com/calendar/embed?src=jen.tran%40hackreactor.com&ctz=America%2FLos_Angeles" style="border: 0" width="800" height="500" frameborder="0" scrolling="no"></iframe>
      </div>
    `
  })