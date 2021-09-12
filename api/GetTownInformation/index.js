module.exports = async function (context, req) {
    context.res = {
        body: "{\"thingsToDo\":[{\"attractions\":[{\"attractionName\":\"Boston Common\",\"attractionGeneralFee\":\"Free\",\"attractionActivities\":[{\"activityName\":\"Walk and Explore\",\"activityCost\":0},{\"activityName\":\"Ride Swan Boats\",\"activityCost\":11},{\"activityName\":\"Ice skate on the Frog Pond\",\"activityCost\":18}]}]},{\"restaurantName\":\"Asmara\",\"restaurantType\":\"Ethiopian\",\"restaurantCostLevel\":\"Medium\"}]}"
    };
    context.done();
};