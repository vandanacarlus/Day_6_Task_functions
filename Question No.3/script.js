class person {
    constructor(Name,Father_Name,Mother_Name,Gender,Age,Address,Mobile_No,Email,Languages_known) {
    this.Name = Name ;
    this.Father_Name = Father_Name ;
    this.Mother_Name = Mother_Name;
    this.Gender = Gender; 
    this.Age=Age
    this.Address = Address ;
    this.Mobile_No = Mobile_No; ;
    this.Email = Email;
    this.Languages_known=Languages_known;
    }
    person_name() {
    return `my name is ${this.Name}`;
    }
    person_father_name() {
    return `my father name is ${this.Father_Name}`;
    }
    person_mother_name() {
    return `my mother name is ${this.Mother_Name}`;
    }
    person_gender() {
    return `i am a ${this.Gender}`;
    }
    person_age() {
        return `my age is ${this.Age}`;
        }
    person_address() {
    return `my address is ${this.Address}`;
    }
    person_mobile_no() {
    return `my mobile_no is ${this.Mobile_No}`;
    }
    person_Email() {
    return `my email id is ${this.Email}`;
    }
    person_languages_known() {
        return `languages known is ${this.Languages_known}`;
        }
    }
    
    const person_obj = new person("Nandhakumar","Rakkiyannasamy","Mallika","male","27","Erode","99443211599","nandhusri115@gmail.com","Tamil,English");
    console.log(person_obj.person_name());
    console.log(person_obj.person_father_name());
    console.log(person_obj.person_mother_name());
    console.log(person_obj.person_gender());
    console.log(person_obj.person_age());
    console.log(person_obj.person_address());
    console.log(person_obj.person_mobile_no());
    console.log(person_obj.person_Email());
    console.log(person_obj.person_languages_known());
    
// OUTPUT
// my name is Nandhakumar
// my father name is Rakkiyannasamy
// my mother name is Mallika
// i am a male
// my age is 27
// my address is Erode
// my mobile_no is 99443211599
// my email id is nandhusri115@gmail.com
// languages known is Tamil,English