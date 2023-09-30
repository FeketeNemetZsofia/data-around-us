let title = "The Neverending Story"
console.log(title)

let author = "Michael Ende"
console.log(author)

let year = 1979 
console.log(year)

let isNewerThan2000 = false
console.log(isNewerThan2000)

let age = 2023 - year
console.log(age)

let characters = ["Bastian Balthazar Bux", "Atreyu", "Falkor", "Childlike Empress"]
console.log(characters)

let favoriteBook = {
    title : "The Neverending Story",
    author : "Michael Ende",
    year : 1979,
    isNewerThan2000 : false,
    age : 2023 - year,
    characters : ["Bastian Balthazar Bux", "Atreyu", "Falkor", "Childlike Empress"]
}

console.log(favoriteBook.author)
console.log(favoriteBook.characters[0])

let favoriteBooks = [
    {
        title : "The Neverending Story",
        author : "Michael Ende",
        year : 1979,
        isNewerThan2000 : false,
        characters : ["Bastian Balthazar Bux", "Atreyu", "Falkor", "Childlike Empress"]
    },
    {
        title : "Abigél",
        author : "Magda Szabó",
        year : 1970,
        isNewerThan2000 : false,
        characters : ["Georgina Vitay", "Sister Zsuzsanna", "Mici Horn", "Kőnig"]
    }
]
console.log(favoriteBooks[1].title)
console.log(favoriteBooks[1].characters[0])

console.log(favoriteBooks[0].year - favoriteBooks[1].year)