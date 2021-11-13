var alternativeData = `[
  {
    "id": "1",
    "name": "Dam Anh Tuan"
  },
  {
    "id": "2",
    "name": "Dam Tuan Anh"
  },
  {
    "id": "3",
    "name": "Dam Trong Tuan"
  },
  {
    "id": "4",
    "name": "Nguyen Anh Tuan"
  },
  {
    "id": "5",
    "name": "Hoang Tuan Vu"
  },
  {
    "id": "6",
    "name": "Nguyen Duc Toi"
  },
  {
    "id": "7",
    "name": "Tran Duc Toan"
  },
  {
    "id": "8",
    "name": "Nguyen Duc Thu"
  },
  {
    "id": "9",
    "name": "Phan Trong Thuong"
  },
  {
    "id": "10",
    "name": "Dam Duc Tuan"
  },
  {
    "id": "11",
    "name": "Trinh Thi Nga"
  },
  {
    "id": "12",
    "name": "Vu Thi Huong"
  },
  {
    "id": "13",
    "name": "Pham Van Trong"
  },
  {
    "id": "14",
    "name": "Dam Anh Truong"
  },
  {
    "id": "15",
    "name": "Dam Duc Toan"
  },
  {
    "id": "16",
    "name": "Dam Trong Vu"
  },
  {
    "id": "16",
    "name": "Dam Dat Vu"
  },
  {
    "id": "16",
    "name": "Dam Quang Son"
  }
]`;

function loadJSON(callback) {
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType('application/json');
  xhr.open('GET', 'data.json', false);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == '200') {
      callback(xhr.responseText);
    } else {
      confirm.log('abc');
      callback(alternativeData);
    }
  };
  xhr.send(null);
}

var myData = [];

function handleSearchResult(data) {
  if (window.location.pathname === '/' || window.loadJSON.pathname === '/index.html') {
    myData = JSON.parse(data);
  } else {
    myData = JSON.parse(alternativeData);
  }
  var input = document.getElementById('search').value.toUpperCase();
  var resultArray = myData.filter(function (element) { return element.name.toUpperCase().indexOf(input) !== -1 })
  var resultHtml = '';
  for (var i = 0; i < resultArray.length; i++) {
    resultHtml += '<div>' + resultArray[i].name + '</div>'
  }
  document.getElementById('search-result').innerHTML = resultHtml;
}

function resultSearch() {
  loadJSON(function (response) {
    handleSearchResult(response);
  });
}

function resultSearchWhenDoNotServer() {
  handleSearchResult();
};

function handleOnChange() {
  if (window.location.pathname === '/' || window.loadJSON.pathname === '/index.html') {
    resultSearch();
  } else {
    resultSearchWhenDoNotServer();
  }
}

handleOnChange();

var myFunctionSearch = '';

function handleSearch() {
  if (document.getElementById('search').value.length === 0) {
    handleOnChange();
  } else {
    if (window.location.pathname === '/') {
      myFunctionSearch = setTimeout(resultSearch, 3000);
    } else {
      myFunctionSearch = setTimeout(resultSearchWhenDoNotServer, 3000);
    }
  }
}

function myStopSearch() {
  clearTimeout(myFunctionSearch);
}
