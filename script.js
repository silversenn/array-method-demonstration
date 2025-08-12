
const arrayMethods = [
  [
    {
      title: "Map",
      description: "<strong>map()</strong> returns a new array. It processes each element and modifies it based on a provided function.",
      image: "assets/map.png",
      methodCodes: [
        {
          label: "Double the number",
          method: "array.map(function(n){return n * 2});",
        },
        {
          label: "Turn each number into String",
          method: "array.map(function(n){return `Number ${n}`});",
        },
        {
          label: "Odd and Even",
          method: "array.map(function(n){return n % 2 === 0 ? 'Even' : 'Odd'});"
  
        },      
      ],
    },
    {
      title: "Filter",
      description: "<strong>filter()</strong> returns a new array that will contain only those elements, for which the provided filtering function returns true.",
      image: "assets/filter.png",
      methodCodes: [
        {
          label: "Pick the Even Number",
          method: "array.filter(n => n % 2 === 0);",
        },
        {
          label: "Pick the number bigger than 5",
          method: "array.filter(n => n > 5);",
        },
        {
          label: "Pick the number on Even indexes",
          method: "array.filter((_, i) => i % 2 === 0);"
        },            
      ]
    },
    {
      title: "Join",
      description: "<strong>join()</strong> creates and returns a new string by concatenating all of the elements in an array, but these elements will be separated by the indicated separator.",
      image: "assets/join.png",
      methodCodes: [
        {
          label: "join all numbers into one single string",
          method: "array.join();",
        },
        {
          label: "join all numbers and separate them with ('-')",
          method: "array.join('-');",
        }, 
      ]
    },
    {
      title: "Concat",
      description: "<strong>Concat()</strong> combines two arrays and returns a third one, as a final result.",
      image: "assets/concat.png",
      methodCodes: [
        {
          label: "Combine with other array",
          method: "array.concat([11, 12]);",
        },
      ]
    },
    {
      title: "Slice",
      description: "<strong>Slice()</strong> with the provided indexes, it takes a specified section of an original array and creates a new one with only these elements. Staring index — is included, but end one — is not.",
      image: "assets/slice.png",
      methodCodes: [
        {
          label: "Returns selected elements in a new array.",
          method: "array.slice(0, 5);",
        },
        {
          label: "Take the last 3 elements",
          method: "array.slice(-3);",
        }, 
      ]
    },
  ],
  [
    {
      title: "Push",
      description: "<strong>Push()</strong> adds an element to the end of the current array. Surpassingly, the method call will return not an updated array, but integer value — the new length of the array.",
      image: "assets/push.png",
      methodCodes: [
        {
          label: "Add one elemet to the array",
          method: "array.push(11);",
        },
        {
          label: "Add two elemets to the array",
          method: "array.push(11, 13);",
        }, 
      ]
    },
    {
      title: "Pop ",
      description: "<strong>Pop()</strong> removes the last element from an array and returns the removed element itself.",
      image: "assets/pop.png",
      methodCodes: [
        {
          label: "Remove the last element from the array",
          method: "array.pop();",
        },
      ]
    },
    {
      title: "Shift",
      description: "<strong>Shift()</strong> removes the first element from an array and returns that removed element.",
      image: "assets/shift.png",
      methodCodes: [
        {
          label: "Remove the first element of the array",
          method: "array.shift();",
        },
      ]
    },
    {
      title: "Sort",
      description: "<strong>Sort()</strong> sorts the elements of an array in ascending order and returns this array, but already sorted. It’s also possible to pass a callback function, that will describe the sorting logic.",
      image: "assets/sort.png",
      methodCodes: [
        {
          label: "Sort an array in correct orders",
          method: "array.sort();",
        },
        {
          label: "Sort the array in ascending orders",
          method: "array.sort((a, b) => a - b);",
        }, 
        {
          label: "Sort the array in descending orders",
          method: "array.sort((a, b) => b - a);",
        }, 
      ]
    },
    {
      title: "Fill",
      description: "<strong>Fill()</strong> adds or replaces all the elements of an array from a start index to an end index with a provided value.",
      image: "assets/fill.png",
      methodCodes: [
        {
          label: "Replace all the elements to 5",
          method: "array.fill(5)",
        },
        {
          label: "Fill all the elements from index 2 to 5",
          method: "array.fill(67, 2, 5)",
        }, 
      ]
    },
  ],
  [
    {
      title: "Find",
      description: "<strong>Find()</strong> returns the value of the first element in the provided array that satisfies the provided testing function.",
      image: "assets/find.png",
      methodCodes: [
        {
          label: "Find the first element with Even number",
          method: "array.find(n => n % 2 === 0)",
        },
        {
          label: "Find the first element that bigger than 5",
          method: "array.find(n => n > 5)",
        }, 
      ]
    },
    {
      title: "FindIndex",
      description: "<strong>FindIndex()</strong> returns the index of the first element in the array that satisfies the provided testing function.",
      image: "assets/findindex.png",
      methodCodes: [
        {
          label: "Find the index of the first element with even number",
          method: "array.findIndex(n => n % 2 === 0)",
        },
        {
          label: "Find the index of spesific number(returns -1 if not found)",
          method: "array.findIndex(n => n === 9)",
        }, 
      ]
    },
    {
      title: "IndexOf",
      description: "<strong>IndexOf()</strong> returns the first index at which a given element can be found in the array. The difference from findIndex, is that here the element/value itself is passed as an argument, instead of callback function.",
      image: "assets/Indexof.png",
      methodCodes: [
        {
          label: "find the index of an element",
          method: "array.indexOf(4)",
        },
        {
          label: "find the index of an element starts from index 2",
          method: "array.indexOf(5, 2)",
        }, 
      ]
    },
    {
      title: "Some",
      description: "<strong>Some()</strong> returns boolean value whenever at least one element in the array passes the provided testing callback function.",
      image: "assets/some.png",
      methodCodes: [
        {
          label: "returns true if at least one elements is Odd",
          method: "array.some(n => n % 2 !== 0)",
        },
        {
          label: "returns true if one element is bigger than 5(false if it isn't exist)",
          method: "array.some(n => n > 5)",
        }, 
      ]
    },
    {
      title: "Every",
      description: "<strong>Every()</strong> returns true if every element in this array satisfies the testing function.",
      image: "assets/every.png",
      methodCodes: [
        {
          label: "returns true if every elements is Even",
          method: "array.every(n => n % 2 === 0)",
        },
        {
          label: "returns true if all elements is smaller than 67",
          method: "array.every(n => n < 67)",
        }, 
      ]
    },
    {
      title: "Includes",
      description: "<strong>Includes()</strong> returns boolean if a provided element is present at least once in the array. The difference from some method —is that here the element/value itself is passed as an argument, instead of callback function.",
      image: "assets/includes.png",
      methodCodes: [
        {
          label: "check if the array contains 5",
          method: "array.includes(5)",
        },
        {
          label: "check if there's 10 after index 5",
          method: "array.includes(10, 5)",
        }, 
      ]
    },
    
  ]
]



document.addEventListener("DOMContentLoaded", function () {

  //parent
  const previewSections = document.querySelector(".method-preview")
  const demoSections = document.querySelector(".demo-section")

  //container
  const prevContainer = document.querySelectorAll(".preview-container");
  // const container = document.getElementById("section-container");


  const wrapperContainers = document.querySelector('.methods-wrapper');
  const demoWrapper = document.querySelector('.demo-wrapper');


  // setiap iterasi array arrayMethods
  arrayMethods.forEach((arrayGroup, index) => {
    const container = prevContainer[index];                                     //iterasi container berdasarkan index array

    //-----------PREVIEW METHODS
      //clone parent preview
      arrayGroup.forEach(data => {
        const prevSection =  previewSections.cloneNode(true) 
        prevSection.style.display = "block";
  
        prevSection.querySelector("legend").textContent = data.title;           //insert title
        prevSection.querySelector(".description").innerHTML = data.description; //insert description
  
        //insert image
        prevSection.querySelector(".img-preview").setAttribute('src', data.image)
        prevSection.querySelector(".img-preview").setAttribute('alt', `${data.title} illustration`)
  
  
        prevSection.addEventListener('click', function(){
          wrapperContainers.classList.add('shift');
          showDemo(data, index);                                                     //menampilkan demo section ketika di klik
        })
  
        container.append(prevSection);                                         //menambahkan method-preview ke container
      })
    //----------------------------------------
  })



  function showDemo(data, index){
    
    //------------DETAIL METHODS
    demoWrapper.classList.add('active');

    demoSections.querySelector("legend").innerHTML =  data.title;   //insert title
    demoSections.querySelector(".description").innerHTML = data.description; //insert description

    //insert image
    demoSections.querySelector(".img-preview").setAttribute('src', data.image)
    demoSections.querySelector(".img-preview").setAttribute('alt', data.altimage)
                                      
    demoSections.querySelector(".demo-title").textContent = `${data.title} Demonstration`;

     const inputs = demoSections.querySelector(".inputArray");           //input dari user
     const submit = demoSections.querySelector(".submitArray");          //button submit
     const arrayResult = demoSections.querySelector(".input-result");    //hasil inputan array

     inputs.value = "";
     arrayResult.textContent = "";
 
     demoSections.querySelector(".output-result").style.display = "none"
 
     //mengecek kondisi input user
     inputs.addEventListener("input", function () {
       this.value = this.value
         .replace(/[^0-9\s]/g, '')   // hanya menerima inputan angka dan spasi
         .replace(/\s{2,}/g, ' ');   // ubah spasi ganda jadi satu
     });
   
     inputs.addEventListener("keydown", function (e) {
       const val = this.value;
       const caret = this.selectionStart;  //posisi kursor pada input
   
       // Cegah spasi berulang saat mengetik input(jika sebelumnya sudah spasi)
       if (e.key === " " && val.charAt(caret - 1) === " ") {
         e.preventDefault(); // Blokir spasi kedua
       }
     });
 
 
     //submit hasil MAP
     submit.addEventListener('click', function(){
       //show result demoSections
        demoSections.querySelector(".output-result").style.display = "block"
 
       if(inputs.value !== ''){
         let array = inputs.value.trim().split(/\s+/).map(Number);
         console.log(typeof(array))
  
         //hasil array inputan user
         arrayResult.textContent = `Array : [${array.join(', ')}];`
         console.log(arrayResult.innerText)
 
         //result container
         const resultsContainer = demoSections.querySelector(".results-container"); 
         resultsContainer.classList.add('active');
         resultsContainer.innerHTML = '';
 
         data.methodCodes.forEach(method => {
           const resultDemo = demoSections.querySelector(".results").cloneNode(true);  //clone output demoSections
           resultDemo.style.display = "block";
           resultDemo.querySelector(".result-labels").innerHTML = method.label;
           resultDemo.querySelector(".code-block").innerHTML = method.method;

           if(index !== 1 ){
            resultDemo.querySelector(".output").innerHTML = "<b>Output:</b> " + eval(method.method)
           }else{
            array = inputs.value.trim().split(/\s+/).map(Number);
            eval(method.method)
            resultDemo.querySelector(".output").innerHTML = "<b>Output:</b> " + array
           }
           
           resultsContainer.appendChild(resultDemo);
         })
       }
     });
  }

});