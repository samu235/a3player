import getSites from "../../services/getSites";


it('get element of api', () =>{
    console.log(result)

    expect.assertions(1);
    return getSites().then(data => expect(data.length).toBeGreaterThan(0))
    
})