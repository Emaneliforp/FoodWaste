const AUTH = firebase.auth();
const DB = firebase.database();

/**This section is for calling function
 */
f1();

/**Setup homepage(calendar) */
function setup(){
DB.ref("test").on("value", function(snapshot) {
    console.log(snapshot.val());
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
}

async function f1() {
    var x = await setup();
    console.log(x);
  }