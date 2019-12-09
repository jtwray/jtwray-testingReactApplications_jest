const help = require(`./helpers`)

//"jest" is global variable injected by the jest library from C.R.A same as "describe" and "it"
// jest.mock takes a path to whatever we what to "mock" or "stub" to give a known "expect" value

// jest.mock('./pathTotestingValue',callback returning whatever it is we want the tested module to become)

jest.mock('uuid',()=>()=>'1234')
console.log("jest.mock('uuid',()=>()=>'1234'):",jest.mock('uuid',()=>()=>'1234'))

describe('helpers module',()=>{
    describe('sum function',()=>{

    })

    describe('makePerson funtion',()=>{
        it('can create a person from firstName and lastName',()=>{
            const expected = { id:'1234',fullName:'Bruce Willis'}
            const actual = help.makePerson('Bruce','Willis')
            //.toBe() matcher willnot work with objects
            //.toEqual() will work with objects Kewl@

            expect(actual).toEqual(expected)

        })
    })
    describe('executeIfEven',()=>{
        it('invokes a callback if passed an even number',()=>{
            const spy = jest.fn()
            help.executeIfEven(2,spy)
            expect(spy).toBeCalledWith(2)

        })
        it('does not invoke a callback if passed an odd number',()=>{
 const spy = jest.fn()
            help.executeIfEven(3,spy)
            expect(spy).not.toBeCalledWith(3)
        })
    })

})