// Write your classes here

class Tree {
  constructor( species ) {
    this.species = species
  }

  static definition() {
    return 'The tree is a long plant.'
  }

}

class Deciduous extends Tree {
  constructor( species, name ) {
    super( species )
    this.name = name
  }

  static definition() {
    return `${super.definition()} Deciduous trees shed their leaves annually.`
  }
}

class Evergreen extends Tree {
  constructor( species, name ) {
    super( species )
    this.name = name
  }

  static definition() {
    return `${super.definition()} Evergreens keep their leaves all year round.`
  }
}
