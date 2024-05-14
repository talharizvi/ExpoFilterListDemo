import { filterUsersByType } from "../utils";

describe('filterUsersByType function', ()=>{
    //Mock data
    const mockArray = [
        { "name": "Karan Ahuja", "type": 1 },
        { "name": "Suraj Singh", "type": 0 },
    ]

    it('should filter the users based on the admin type', ()=>{
        const result = filterUsersByType(mockArray, 'admin')
        expect(result).toEqual([{ "name": "Suraj Singh", "type": 0 }])
    })

    it('should filter the users based on the manager type', ()=>{
        const result = filterUsersByType(mockArray, 'manager')
        expect(result).toEqual([{ "name": "Karan Ahuja", "type": 1 }])
    })
})