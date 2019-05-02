/* Simple parsing example 
*/
const bear = {
    name: 'Ice Bear',
    hobbies: ['knitting', 'cooking', 'dancing'],
    comp : {
        add : "CycberHub",
        desk : "46",
    },
    comp1 : {
        add : "CycberHub",
        desk : "46",
    },
    name1: 'Panda',
    comp2 : {
        add : "CycberHub",
        desk : "46",
    },
    hobbies1: ['knitting', 'cooking', 'dancing']
  };
  
const serializedBear = JSON.stringify(bear);
//console.log(serializedBear);

//console.log("----------------------");

  
var obj = {};
var c = 0;
function MyParser(obj, str)
{
    console.log(c++ +" ----" + str);
    while(str != "}")
    {
        if(str[0] == ",")
        {
            str = str.slice(1);
        }
        var pos = str.indexOf(":");
        if(str.charAt(pos+1) == "[") //array
        {
            let n = str.indexOf("]");
            let substr = str.slice(0,n);
            str = str.slice(n+1); //change original string -- remove key-value pair

            let key = substr.slice(1,substr.indexOf(":")).replace(/\"/g,"");
            let value = substr.slice(substr.indexOf(":")+2).replace(/\"/g,"")

            obj[key] = value.split(",");

            //console.log("str -----> " + str);
            
        }
        else if(str.charAt(pos+1) == "{") //object
        {
            let n = str.indexOf("}");
            let substr = str.slice(0,n + 1);
            str = str.slice(n+1);

            let key = substr.slice(0,substr.indexOf(":")).replace(/\"/g,"");
            substr = substr.slice(substr.indexOf(":")+1);
            //console.log(substr);
            obj[key] = {};
            MyParser(obj[key],substr);
            

        }
        else
        {
            let n = str.indexOf(",");
            let substr = "";
            if (n > 0)
            {
                substr = str.slice(0,n);
                str = str.slice(n+1);   //change original string -- remove  pair
            }   
            else
            {
                substr = str.slice(0,str.length - 1);
                str = str.slice(str.indexOf("}"));  //change original string -- remove  pair
            }

            
            // slice pair into key value
            let key = substr.slice(1,substr.indexOf(":")).replace(/\"/g,"");
            let value = substr.slice(substr.indexOf(":")+1).replace(/\"/g,"")
            obj[key] = value;
            // store it in obj
        }
    }
}

MyParser(obj,serializedBear);

console.log(obj);
console.log("----------------------");

console.log(bear);

  //MyStringify(bear);
  //console.log(bear);
  //console.log("----------------------");
  //console.log(str);

// stringify 
var str = "";
function MyStringify(obj)
{
    str = str + "{";
    let keys = Object.keys(obj);
    let values = Object.values(obj);

    for (let i = 0; i < keys.length; i++)
    {
        if (Array.isArray(values[i]))
        {
            str = str + "\"" + keys[i].toString() + "\"" + ":["; 
            for(let j=0; j< values[i].length; j++)
            {
               str = str + "\"" + values[i][j].toString() + "\"";

            if (j < values[i].length-1)
                str = str + ",";
            }
            str += "]";
        }
        else if (typeof values[i] == "object")
        {
                str = str + "\"" + keys[i].toString() + "\"" + ":";
                MyStringify(values[i])
        }
        else
        {  
            str += "\"" + keys[i].toString() + "\"" + ":"  + "\"" + values[i].toString() + "\"";
        }

        if (i < keys.length-1)
            str = str + ",";
    }
    str = str + "}";
}
