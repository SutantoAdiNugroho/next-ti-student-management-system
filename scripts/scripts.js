var saveIdStudent = document.getElementById('addStudentId')
var saveAddress = document.getElementById('addAdress')
var saveFullName = document.getElementById('addFullName')
var savePassword = document.getElementById('addPassword')
var saveDateOfBirth = document.getElementById('addDateOfBirth')
var saveConfirmPassword = document.getElementById('addConfirmPassword')
var saveFaculty = document.getElementById('addFaculty')

var tableIdStudent = document.getElementById('updateIdStudent')
var tableFullName = document.getElementById('updateFullName')
var tableFaculty = document.getElementById('updateFaculty')
var tableDateOfBirth = document.getElementById('updateDateOfBirth')
var tableAdress = document.getElementById('updateAddress')
var showAllDataStudent = document.getElementById('tableShowAllData')

var buttonUpdate = document.getElementById('btnUpdate')
var buttonSaveUpdate = document.getElementById('btnSaveUpdate')

function saveStudents() {
    var getFullYearBirth = new Date(saveDateOfBirth.value).getFullYear()
    var getFullYearNow = new Date().getFullYear()
    var setAgeNow = getFullYearNow - getFullYearBirth

    if (saveIdStudent.value == "" || saveAddress.value == "" || saveFullName.value == "" || savePassword.value == "" || saveDateOfBirth.value == "" || saveConfirmPassword.value == "" || saveFaculty.value == "") {
        alert("Make sure this data is filled in correctly!")
    } else if (savePassword.value != saveConfirmPassword.value) {
        alert("Please confirm the password correctly!")
    } else if (setAgeNow < 18) {
        alert("Age must be more than 18 years")
    } else if (setAgeNow > 100) {
        alert("Please write a specific your age")
    } else {
        alert("Add success")
        localStorage.setItem("id_student", saveIdStudent.value)
        localStorage.setItem("address", saveAddress.value)
        localStorage.setItem("fullname", saveFullName.value)
        localStorage.setItem("password", savePassword.value)
        localStorage.setItem("date_of_birth", saveDateOfBirth.value)
        localStorage.setItem("age_now", setAgeNow)
        localStorage.setItem("confirm_password", saveConfirmPassword.value)
        localStorage.setItem("faculty", saveFaculty.value)
        localStorage.setItem("facultyIndex", saveFaculty.selectedIndex)

        window.location.href = "../studentsdata.html"
    }
}

function showStudents() {
    const isCreate = localStorage.getItem('id_student');

    if (!isCreate) {
        showAllDataStudent.style.visibility = "hidden"
    } else {
        showAllDataStudent.style.visibility = "visible"
        tableIdStudent.defaultValue = localStorage.getItem('id_student')
        tableFullName.defaultValue = localStorage.getItem('fullname')
        tableFaculty.selectedIndex = localStorage.getItem('facultyIndex')
        tableDateOfBirth.defaultValue = localStorage.getItem('date_of_birth')
        tableAdress.defaultValue = localStorage.getItem('address')
    }
}

function updateStudents() {
    tableIdStudent.disabled = false
    tableFullName.disabled = false
    tableFaculty.disabled = false
    tableDateOfBirth.disabled = false
    tableAdress.disabled = false

    buttonUpdate.style.display = "none"
    buttonSaveUpdate.style.display = "inline"
}

function saveUpdateStudents() {
    var getFullYearBirth = new Date(tableDateOfBirth.value).getFullYear()
    var getFullYearNow = new Date().getFullYear()
    var setAgeNow = getFullYearNow - getFullYearBirth

    if (tableIdStudent.value == "" || tableFullName.value == "" || tableFaculty.value == "" || tableDateOfBirth.value == "" || tableAdress.value == "") {
        alert("Make sure this data is filled in correctly!")
    } else if (setAgeNow < 18) {
        alert("Age must be more than 18 years")
    } else if (setAgeNow > 100) {
        alert("Please write a specific your age")
    } else {
        alert("Success update data")
        tableIdStudent.disabled = true
        tableFullName.disabled = true
        tableFaculty.disabled = true
        tableDateOfBirth.disabled = true
        tableAdress.disabled = true

        localStorage.setItem("id_student", tableIdStudent.value)
        localStorage.setItem("address", tableAdress.value)
        localStorage.setItem("fullname", tableFullName.value)
        localStorage.setItem("date_of_birth", tableDateOfBirth.value)
        localStorage.setItem("facultyIndex", tableFaculty.selectedIndex)

        buttonUpdate.style.display = "inline"
        buttonSaveUpdate.style.display = "none"
    }
}

function deleteStudents() {    
    var confirmDelete = confirm("Are you sure to delete this student?");
    if (confirmDelete == true)
        localStorage.clear()
        showStudents()
}

function isNumericKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57))
        return true;
        return false;
}

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
        return true;
}

showStudents()