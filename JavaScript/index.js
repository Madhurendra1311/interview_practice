//Debouncing in javaScript

// limiting the rate of execution of the function

let counter = 0;
const getData = () => {
    //calls an api and gets Data
    console.log("fetching data", counter++);
}

const debounce = function(fn, d) {
    let timer;
    return function() {
        let context = this;
        args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            getData.apply(context, arguments);
        }, d);
    }

}

const betterFunction = debounce(getData, 300)


// Throttling

const loggerFunc = () => {
    console.count("Throttled Function");
  }
  
  const throttle = (fn, limit) => {
    let flag = true;
    return function(){
      let context = this;
      let args = arguments;
      if(flag){
        fn.apply(context, args);
        flag = false;
        setTimeout(() => {
          flag=true;
        }, limit);
      }
    }
  }
  
  const betterLoggerFunction = throttle(loggerFunc, 1000);
  
  window.addEventListener("resize",betterLoggerFunction);
  
  // This is the normal Function without Throttling
  //Check the console for the difference between the calls of Normal Function and the Throttled Function 
  const normalFunc = () => {
    console.count("Normal Function");
  }
  
  window.addEventListener("resize",normalFunc);
  
  