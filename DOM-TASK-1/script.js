document.body.setAttribute('class','container')

const infoPara = document.createElement('h4')
infoPara.innerText = 'Fill the below form'
infoPara.style.fontWeight = '700px'
infoPara.style.marginTop = '35px'

document.body.append(infoPara)

const formElement = document.createElement('form')

document.body.appendChild(formElement)

const formDiv1 = document.createElement('div')
formDiv1.setAttribute('class','textField form-group row')

const label1 = document.createElement('label')
label1.setAttribute('for', 'firstName')
label1.setAttribute('class', 'col-sm-2 col-form-label')
label1.innerText = 'First Name:'

const input1 = document.createElement('input')
input1.setAttribute('type','text')
input1.setAttribute('placeholder', 'Enter First Name')
input1.setAttribute('id','firstName')
input1.setAttribute('name', 'firstName')
input1.setAttribute('class','col-sm-10 form-control')

formDiv1.append(label1,input1)

// --------------------------------------------------------------------------

const formDiv2 = document.createElement('div')
formDiv2.setAttribute('class','textField form-group row')

const label2 = document.createElement('label')
label2.setAttribute('for', 'lastName')
label2.setAttribute('class', 'col-sm-2 col-form-label')
label2.innerText = 'Last Name:'

const input2 = document.createElement('input')
input2.setAttribute('type','text')
input2.setAttribute('placeholder', 'Enter Last Name')
input2.setAttribute('id','lastName')
input2.setAttribute('name', 'lastName')
input2.setAttribute('class','col-sm-10 form-control')

formDiv2.append(label2,input2)

// --------------------------------------------------------------------------

const formDiv3 = document.createElement('div')
formDiv3.setAttribute('class','textField form-group row')

const label3 = document.createElement('label')
label3.setAttribute('for', 'address')
label3.setAttribute('class', 'col-sm-2 col-form-label')
label3.innerText = 'Address:'

const input3 = document.createElement('input')
input3.setAttribute('type','text')
input3.setAttribute('placeholder', 'Enter Address')
input3.setAttribute('id','address')
input3.setAttribute('name', 'address')
input3.setAttribute('class','col-sm-10 form-control')

formDiv3.append(label3,input3)

// --------------------------------------------------------------------------

const formDiv4 = document.createElement('div')
formDiv4.setAttribute('class','textField form-group row')

const label4 = document.createElement('label')
label4.setAttribute('for', 'pincode')
label4.setAttribute('class', 'col-sm-2 col-form-label')
label4.innerText = 'Pincode:'

const input4 = document.createElement('input')
input4.setAttribute('type','text')
input4.setAttribute('placeholder', 'Enter Pincode')
input4.setAttribute('id','pincode')
input4.setAttribute('name', 'pincode')
input4.setAttribute('class','col-sm-10 form-control')

formDiv4.append(label4,input4)

// --------------------------------------------------------------------------

const formDiv5 = document.createElement('div')
formDiv5.setAttribute('class','form-group row')

const labelDiv1 = document.createElement('div')

const genderLabel = document.createElement('label')
genderLabel.innerText = 'Gender:'

labelDiv1.append(genderLabel)
labelDiv1.setAttribute('class','col-form-label col-sm-2')

const inputDiv1 = document.createElement('div')

const formCheckDiv1 = document.createElement('div')
formCheckDiv1.setAttribute('class','form-check')

const label5 = document.createElement('label')
label5.setAttribute('for', 'male')
label5.innerText = 'Male'
label5.setAttribute('class','form-check-label')

const input5 = document.createElement('input')
input5.setAttribute('type','radio')
input5.setAttribute('id','male')
input5.setAttribute('name', 'gender')
input5.setAttribute('value','male')
input5.setAttribute('class','form-check-input')

formCheckDiv1.append(input5,label5)

const formCheckDiv2 = document.createElement('div')
formCheckDiv2.setAttribute('class','form-check')

const label6 = document.createElement('label')
label6.setAttribute('for', 'female')
label6.innerText = 'Female'
label6.setAttribute('class','form-check-label')

const input6 = document.createElement('input')
input6.setAttribute('type','radio')
input6.setAttribute('id','female')
input6.setAttribute('name', 'gender')
input6.setAttribute('value','female')
input6.setAttribute('class','form-check-input')

formCheckDiv2.append(input6,label6)

inputDiv1.append(formCheckDiv1,formCheckDiv2)
inputDiv1.setAttribute('class','col-sm-10')

formDiv5.append(labelDiv1,inputDiv1)

// --------------------------------------------------------------------------

const formDiv6 = document.createElement('div')
formDiv6.setAttribute('class','form-group row')

const labelDiv2 = document.createElement('div')
labelDiv2.setAttribute('class', 'col-form-label col-sm-2')

const foodLabel = document.createElement('label')
foodLabel.innerText = 'Food: (select atleast 2 options)'

labelDiv2.append(foodLabel)

const inputDiv2 = document.createElement('div')

inputDiv2.setAttribute('class','col-sm-10')

const formCheckDiv3 = document.createElement('div')
formCheckDiv3.setAttribute('class','form-check')

const input7 = document.createElement('input')
input7.setAttribute('type', 'checkbox')
input7.setAttribute('name', 'food')
input7.setAttribute('value', 'Only Veg')
input7.setAttribute('id', 'food1')
input7.setAttribute('onclick','return multiCheckbox()')
input7.setAttribute('class','form-check-input')

const label7 = document.createElement('label')
label7.setAttribute('for', 'food1')
label7.innerText = 'Only Veg'
label7.setAttribute('class','form-check-label')

formCheckDiv3.append(input7,label7)

const formCheckDiv4 = document.createElement('div')
formCheckDiv4.setAttribute('class','form-check')

const input8 = document.createElement('input')
input8.setAttribute('type', 'checkbox')
input8.setAttribute('name', 'food')
input8.setAttribute('value', 'Only Non-Veg')
input8.setAttribute('id', 'food2')
input8.setAttribute('onclick','return multiCheckbox()')
input8.setAttribute('class','form-check-input')

const label8 = document.createElement('label')
label8.setAttribute('for', 'food2')
label8.innerText = 'Only Non-Veg'
label8.setAttribute('class','form-check-label')

formCheckDiv4.append(input8,label8)

const formCheckDiv5 = document.createElement('div')
formCheckDiv5.setAttribute('class','form-check')

const input11 = document.createElement('input')
input11.setAttribute('type', 'checkbox')
input11.setAttribute('name', 'food')
input11.setAttribute('value', 'Vegan & Veg')
input11.setAttribute('id', 'food3')
input11.setAttribute('onclick','return multiCheckbox()')
input11.setAttribute('class','form-check-input')

const label11 = document.createElement('label')
label11.setAttribute('for', 'food3')
label11.innerText = 'Vegan & Veg'
label11.setAttribute('class','form-check-label')

formCheckDiv5.append(input11,label11)

const formCheckDiv6 = document.createElement('div')
formCheckDiv6.setAttribute('class','form-check')

const input12 = document.createElement('input')
input12.setAttribute('type', 'checkbox')
input12.setAttribute('name', 'food')
input12.setAttribute('value', 'Veg & Non-Veg')
input12.setAttribute('id', 'food4')
input12.setAttribute('onclick','return multiCheckbox()')
input12.setAttribute('class','form-check-input')

const label12 = document.createElement('label')
label12.setAttribute('for', 'food4')
label12.innerText = 'Veg & Non-Veg'
label12.setAttribute('class','form-check-label')

formCheckDiv6.append(input12,label12)

const formCheckDiv7 = document.createElement('div')
formCheckDiv7.setAttribute('class','form-check')

const input13 = document.createElement('input')
input13.setAttribute('type', 'checkbox')
input13.setAttribute('name', 'food')
input13.setAttribute('value', 'All')
input13.setAttribute('id', 'food5')
input13.setAttribute('onclick','return multiCheckbox()')
input13.setAttribute('class','form-check-input')

const label13 = document.createElement('label')
label13.setAttribute('for', 'food5')
label13.innerText = 'All'
label13.setAttribute('class','form-check-label')

formCheckDiv7.append(input13,label13)

inputDiv2.append(formCheckDiv3,formCheckDiv4,formCheckDiv5,formCheckDiv6,formCheckDiv7)



formDiv6.append(labelDiv2,inputDiv2)

// --------------------------------------------------------------------------

const formDiv7 = document.createElement('div')
formDiv7.setAttribute('class','textField form-group row')

const label9 = document.createElement('label')
label9.setAttribute('for', 'state')
label9.setAttribute('class', 'col-sm-2 col-form-label')
label9.innerText = 'State:'

const input9 = document.createElement('input')
input9.setAttribute('type','text')
input9.setAttribute('placeholder', 'Enter State')
input9.setAttribute('id','state')
input9.setAttribute('name', 'state')
input9.setAttribute('class','col-sm-10 form-control')

formDiv7.append(label9,input9)

// --------------------------------------------------------------------------

const formDiv8 = document.createElement('div')
formDiv8.setAttribute('class','textField form-group row')

const label10 = document.createElement('label')
label10.setAttribute('for', 'country')
label10.setAttribute('class', 'col-sm-2 col-form-label')
label10.innerText = 'Country:'

const input10 = document.createElement('input')
input10.setAttribute('type','text')
input10.setAttribute('placeholder', 'Enter Country')
input10.setAttribute('id','country')
input10.setAttribute('name', 'country')
input10.setAttribute('class','col-sm-10 form-control')

formDiv8.append(label10,input10)

// --------------------------------------------------------------------------

const formDiv9 = document.createElement('div')
formDiv9.setAttribute('class', 'form-group row')
formDiv9.style.justifyContent = 'center'

const submitBtn = document.createElement('button')
// submitBtn.setAttribute('value','submit')
submitBtn.innerText = 'Submit'
// submitBtn.setAttribute('type','button')
submitBtn.setAttribute('onclick', 'createRow(event)')
submitBtn.setAttribute('class','btn btn-success')

formDiv9.append(submitBtn)

// --------------------------------------------------------------------------


formElement.append(formDiv1,formDiv2,formDiv3,formDiv4,formDiv5,formDiv6,formDiv7,formDiv8,formDiv9)

// ---------------------------------form ends-----------------------------------------

const mainHead = document.createElement('h1')
mainHead.innerText = 'USER INFO DISPLAY'
mainHead.style.marginTop = '25px'
mainHead.style.marginBottom = "25px"

document.body.append(mainHead)

// ---------------------------------table starts-----------------------------------------

const domTable = document.createElement('table')
document.body.append(domTable)

domTable.setAttribute('class','table')


// heading row

const headRow = document.createElement('tr')
domTable.appendChild(headRow)
headRow.setAttribute('class','thead-dark')

// appending headings to head row

const firstName = document.createElement('th')
headRow.appendChild(firstName)
firstName.innerText = 'First Name'

const lastName = document.createElement('th')
headRow.appendChild(lastName)
lastName.innerText = 'Last Name'

const address = document.createElement('th')
headRow.appendChild(address)
address.innerText = 'Address'

const pincode = document.createElement('th')
headRow.appendChild(pincode)
pincode.innerText = 'Pincode'

const gender = document.createElement('th')
headRow.appendChild(gender)
gender.innerText = 'Gender'

const food = document.createElement('th')
headRow.appendChild(food)
food.innerText = 'Food'

const state = document.createElement('th')
headRow.appendChild(state)
state.innerText = 'State'

const country = document.createElement('th')
headRow.appendChild(country)
country.innerText = 'Country'


function createRow(event){
    event.preventDefault();
    // event.returnValue = false;
    // data row

    const rowData = document.createElement('tr')
    domTable.appendChild(rowData)

    // data's

    // console.log(document.getElementById('firstName').value)

    const data1 = document.createElement('td')
    rowData.appendChild(data1)
    data1.innerText = document.getElementById('firstName').value

    // --------------------------------------------------------------------------------------------------------------

    const data2 = document.createElement('td')
    rowData.appendChild(data2)
    data2.innerText = document.getElementById('lastName').value

    // --------------------------------------------------------------------------------------------------------------

    const data3 = document.createElement('td')
    rowData.appendChild(data3)
    data3.innerText = document.getElementById('address').value

    // --------------------------------------------------------------------------------------------------------------

    const data4 = document.createElement('td')
    rowData.appendChild(data4)
    data4.innerText = document.getElementById('pincode').value

    // --------------------------------------------------------------------------------------------------------------

    const data5 = document.createElement('td')
    rowData.appendChild(data5)

    let genderData = document.getElementsByName('gender')
    let genderCheckedData = []

    for(let i = 0 ; i<genderData.length; i++){
        if(genderData[i].checked){
            console.log(genderData[i].value)
            genderCheckedData.push(genderData[i].value)
        }
    }

    console.log(genderCheckedData)
    data5.innerText = genderCheckedData

    // --------------------------------------------------------------------------------------------------------------

    const data6 = document.createElement('td')
    rowData.appendChild(data6)
    
    let foodData = document.getElementsByName('food')
    let foodCheckedData = []

    for(let i = 0 ; i<foodData.length; i++){
        // console.log(foodData[i].checked)
        if(foodData[i].checked){
            console.log(foodData[i].value)
            foodCheckedData.push(foodData[i].value)
        }
    }

    console.log(foodCheckedData)
    data6.innerText = foodCheckedData

    // --------------------------------------------------------------------------------------------------------------

    const data7 = document.createElement('td')
    rowData.appendChild(data7)
    data7.innerText = document.getElementById('state').value

    // --------------------------------------------------------------------------------------------------------------

    const data8 = document.createElement('td')
    rowData.appendChild(data8)
    data8.innerText = document.getElementById('country').value

    // --------------------------------------------------------------------------------------------------------------


    const textFieldInputs = document.getElementsByClassName('textField')
    // console.log(textFieldInputs)
    
    for(let i = 0; i< textFieldInputs.length; i++){
        console.log(textFieldInputs[i].childNodes[1].value)
        textFieldInputs[i].childNodes[1].value = ''
    }

    for(let i = 0; i<genderData.length; i++){
        genderData[i].checked = false
    }

    for(let i = 0; i<foodData.length; i++){
        foodData[i].checked = false
    }
}

function multiCheckbox(){
    let totalCheckBox = document.getElementsByName('food')
    let totalChecked = 0

    for(let i = 0; i<totalCheckBox.length; i++){
        if(totalCheckBox[i].checked){
            totalChecked++
        }
    }

    if(totalChecked > 2){
        alert('Only 2 options can be selected')
        return false
    }
}


