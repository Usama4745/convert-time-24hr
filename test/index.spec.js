const assert = require('assert');
const {convertTimeTo24hrs}=require('../index');
const {convertTimeTo12hrs}=require('../index');

describe('convertTimeTo24hrs', () =>{
    it("should convert 12 hours time to 24 hours",()=>{
        const time=convertTimeTo24hrs(12,1,59,"pm");
        assert.equal(time,"12:01:59");
    })
    it("Should convert 12 hours time to 24Hour",()=>{
        const time=convertTimeTo24hrs(8,45,51,"am");
        assert.equal()time,"08:45:51";
    })
    it("Should convert 12 hours time to 24Hour",()=>{
        const time=convertTimeTo24hrs(12,45,51,"am");
        assert.equal()time,"00:45:51";
    })
    
    
    it("should convert 24 hours time to 12 hours",()=>{
        const time=convertTimeTo12hrs(12,46,26);
        assert.equal(time,"12:46:26 PM");
    })
    it("should convert 24 hours time to 12 hours",()=>{
        const time=convertTimeTo12hrs(23,26,16);
        assert.equal(time,"11:26:16 PM");
    })
    it("should convert 24 hours time to 12 hours",()=>{
        const time=convertTimeTo12hrs(0,25,34);
        assert.equal(time,"12:25:34 AM");
    })
    it("should convert 24 hours time to 12 hours",()=>{
        const time=convertTimeTo12hrs(8,25,34);
        assert.equal(time,"08:25:34 AM");
    })
});
