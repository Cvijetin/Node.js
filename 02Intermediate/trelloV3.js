let myTodos = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0,

    addMeeting: function (num) {
        this.meetings = this.meetings + num
    },

    meetingsDone: function (num) {
        this.meetDone = this.meetDone - num
    },

    reset: function () {
        this.meetings = 0
        this.meetDone = 0
    },

    summary: function () {
        totalMeetings = this.meetings + this.meetDone
        if (totalMeetings <= 0) {
            return `You have 0 meetings today`
        } else {
            return `You have ${totalMeetings} meetings today`
        }
    }
}



myTodos.addMeeting(5)
myTodos.meetingsDone(3)
console.log(myTodos.summary());

myTodos.reset();
console.log(myTodos.summary());
