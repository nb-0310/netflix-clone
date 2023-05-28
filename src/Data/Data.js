import daredevil from '../Assets/Images/daredevil.jpg'
import dark from '../Assets/Images/dark.jpg'
import blackmirror from '../Assets/Images/black mirror.jpg'
import gameofthrones from '../Assets/Images/game of thrones.avif'
import manofsteel from '../Assets/Images/man of steel.jpg'
import doctorstrange from '../Assets/Images/doctor strange.jpg'
import fiftyshades from '../Assets/Images/fifty shades.jpg'
import johnwick from '../Assets/Images/john wick.jpg'
import jjk from '../Assets/Images/jujutsu kaisen.jpg'
import hxh from '../Assets/Images/hxh.jpg'
import aot from '../Assets/Images/aot.jpg'
import tvd from '../Assets/Images/the vampire diaries.jpg'
import dbz from '../Assets/Images/dragon ball.jpg'
import mand from '../Assets/Images/mandalorian.jpg'
import naruto from '../Assets/Images/naruto.jpg'
import tg from '../Assets/Images/tokyo ghoul.jpg'
import sherlock from '../Assets/Images/sherlock.jpg'
import lucifer from '../Assets/Images/lucifer.jpg'
import bvs from '../Assets/Images/bvs.jpg'
import ds from '../Assets/Images/demon slayer.jpg'

const movies = {
    'banner': [
        {
            'title': 'Dark',
            'desc': 'When two children go missing in a small German town, its sinful past is exposed along with the double lives and fractured relationships that exist among four families as they search for the kids.',
            'img': dark,
            'tag': 'show',
            'tranding': true
        },
        {
            'title': 'Black Mirror',
            'desc': 'This sci-fi anthology series explores a twisted, high-tech near-future where humanity\'s greatest innovations and darkest instincts collide.',
            'img': blackmirror,
            'tag': 'show',
            'tranding': true
        },
        {
            'title': 'Game Of Thrones',
            'desc': 'Nine noble families wage war against each other in order to gain control over the mythical land of Westeros. Meanwhile, a force is rising after millenniums and threatens the existence of living men.',
            'img': gameofthrones,
            'tag': 'show',
            'tranding': true
        },
        {
            'title': 'Man Of Steel',
            'desc': 'Clark learns about the source of his abilities and his real home when he enters a Kryptonian ship in the Artic. However, an old enemy follows him to Earth in search of a codex and brings destruction.',
            'img': manofsteel,
            'tag': 'movie'
        },
        {
            'title': 'Daredevil',
            'desc': 'Matt Murdock manages to overcome the challenges that he faces due to him being blind since childhood and fights criminals as a lawyer and Daredevil.',
            'img': daredevil,
            'tag': 'show'
        },
        {
            'title': 'Doctor Strange',
            'desc': 'In an accident, Stephen Strange, a famous neurosurgeon, loses the ability to use his hands. He goes to visit the mysterious Ancient One to heal himself and becomes a great sorcerer under her tutelage.',
            'img': doctorstrange,
            'tag': 'movie'
        },
        {
            'title': 'Fifty Shades of Grey',
            'desc': 'Anastasia fills in for her journalist friend and interviews Christian Grey, a businessman. They begin a relationship where she discovers that his sexual life is influenced by his tormented past.',
            'img': fiftyshades,
            'tag': 'movie',
            'tranding': true
        },
        {
            'title': 'John Wick Parabellum',
            'desc': 'John Wick is declared excommunicado and a hefty bounty is set on him after he murders an international crime lord. He sets out to seek help to save himself from ruthless hitmen and bounty hunters.',
            'img': johnwick,
            'tag': 'movie'
        },
        {
            'title': 'Attack On Titan',
            'desc': 'When man-eating Titans first appeared 100 years ago, humans found safety behind massive walls that stopped the giants in their tracks. But the safety they have had for so long is threatened when a colossal Titan smashes through the barriers, causing a flood of the giants into what had been the humans\' safe zone.',
            'img': aot,
            'tag': 'anime'
        },
        {
            'title': 'Dragon Ball Super: Super Hero',
            'desc': 'The Red Ribbon Army was once destroyed by Son Goku. Individuals who carry on its spirit have created the ultimate androids -- Gamma 1 and Gamma 2. However, these two androids call themselves superheroes and start attacking Piccolo and Gohan.',
            'img': dbz,
            'tag': 'anime'
        },
        {
            'title': 'Lucifer',
            'desc': 'Lucifer, the original fallen angel, who has become dissatisfied with his life in hell. After abandoning his throne and retiring to Los Angeles, Lucifer indulges in his favorite things until a murder takes place outside of his upscale nightclub.',
            'img': lucifer,
            'tag': 'show'
        },
        {
            'title': 'Batman V Superman: Dawn of Justice',
            'desc': 'Bruce Wayne, a billionaire, believes that Superman is a threat to humanity after his battle in Metropolis. Thus, he decides to adopt his mantle of Batman and defeat him once and for all.',
            'img': bvs,
            'tag': 'movie'
        },
        {
            'title': 'Jujutsu Kaisen',
            'desc': 'Yuuji Itadori searches for the rest of the cursed talisman in order to exorcise himself.',
            'img': jjk,
            'tag': 'anime',
            'tranding': true
        },
        {
            'title': 'Demon Slayer',
            'desc': 'Yuuji Itadori searches for the rest of the cursed talisman in order to exorcise himself.',
            'img': ds,
            'tag': 'anime',
            'tranding': true
        },
        {
            'title': 'The Vampire Diaries',
            'desc': 'On her first day at high school, Elena meets Stefan and immediately feels a connection with him. However, what she does not know is that Stefan and his brother, Damon, are in fact vampires.',
            'img': tvd,
            'tag': 'show',
            'tranding': true
        },
        {
            'title': 'Hunter X Hunter',
            'desc': 'Gon Freecss is on a mission to train himself as a hunter just like his father. He reunites with his father, who is alive and an accomplished hunter too.',
            'img': hxh,
            'tag': 'anime'
        },
        {
            'title': 'The Mandalorian',
            'desc': 'After the fall of the Galactic Empire, a lone gunfighter makes his way through the outer reaches of the lawless galaxy.',
            'img': mand,
            'tag': 'show'
        },
        {
            'title': 'Naruto',
            'desc': 'Naruto, an adolescent ninja, dreams of becoming the Hokage in his village.',
            'img': naruto,
            'tag': 'anime'
        },
        {
            'title': 'Sherlock',
            'desc': 'Dr Watson, a former army doctor, finds himself sharing a flat with Sherlock Holmes, an eccentric individual with a knack for solving crimes. Together, they take on the most unusual cases.',
            'img': sherlock,
            'tag': 'show'
        },
        {
            'title': 'Tokyo Ghoul',
            'desc': 'In a world where ghouls live among humans, they are the same as regular people in virtually every way -- other than their craving for human flesh. Shy Ken Kaneki learns that the hard way when he goes on a date with beautiful Rize, who is only interested in him to eat him.',
            'img': tg,
            'tag': 'anime'
        }
    ]
}

export default movies