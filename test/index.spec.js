const assert = require('assert');
const {convertTimeTo24hrs}=require('../index');
const {convertTimeTo12hrs}=require('../index');

describe('convertTimeTo24hrs', () =>{
    it("should convert 12 hours time to 24 hours",()=>{
        const time=convertTimeTo24hrs(12,1,59,"pm");
        assert.equal(time,"12:01:59");
    })
    it("should convert 24 hours time to 12 hours",()=>{
        const time=convertTimeTo12hrs(23,59,59);
        assert.equal(time,"11:59:59 PM");
    })
});