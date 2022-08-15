describe('Site app', () => {
  let idCypress = Math.floor(Math.random() * 100000)
  let name = 'test_name_'+idCypress
  let path = 'test_path_'+idCypress
  let publicPath = 'test_publicPath_'+idCypress
  let description = 'test-description_'+idCypress
  let site = idCypress
  let key = 'test_site_'+idCypress

  beforeEach(()=>{
    cy.visit('http://localhost:3000/')
  })
  it('frontpage can be open', () => {
    cy.contains("Nuevo")
  })
  it('new Site', () => {
    cy.contains("Nuevo").click()
    cy.get('input[name=name]').type(name)
    cy.get('input[name=path]').type(path)
    cy.get('input[name=publicPath]').type(publicPath)
    cy.get('input[name=key]').type(key)
    cy.get('input[name=description]').type(description)
    cy.get('input[name=site]').type(site)
    cy.contains("Guardar").click()
  })
  it('view detail new site',()=>{
    cy.contains(name).parent().contains('Detalle').click()
    cy.contains("Name:").parent().contains(name)
    cy.contains("Path:").parent().contains(path)
    cy.contains("PublicPath").parent().contains(publicPath)
    cy.contains("Key:").parent().contains(key)
    cy.contains("Description:").parent().contains(description)
  })
  it('Modify new site',()=>{
    cy.contains(name).parent().contains('Editar').click()
    name = name+"mod"
    path = path+"mod"
    description = description+"mod"
    cy.get('input[name=name]').type(name)
    cy.get('input[name=path]').type(path)
    cy.get('input[name=description]').type(description)
    cy.contains('Guardar').click()
  })
  it('view detail modify site',()=>{
    cy.contains(name).parent().contains('Detalle').click()
    cy.contains("Name:").parent().contains(name)
    cy.contains("Path:").parent().contains(path)
    cy.contains("PublicPath").parent().contains(publicPath)
    cy.contains("Key:").parent().contains(key)
    cy.contains("Description:").parent().contains(description)
  })
  it('delete new site',()=>{
    cy.contains(name).parent().contains('Eliminar').click()
    cy.contains('SI').click() 
  })

})