export interface Interest {
  slug: string
  title: string
  thought: string // one short line shown on the homepage
  body?: string[] // optional paragraphs for the detail page
  list?: { heading?: string; items: string[] } // optional structured list (e.g. places skied)
}

export const interests: Interest[] = [
  {
    slug: 'skiing',
    title: 'Skiing',
    thought: 'Chasing snow and the quiet at the top of the lift.',
    body: [
      'Nothing resets my head like a cold morning and an empty run.',
      'A running list of mountains I have skied — always looking for the next one.',
    ],
    list: {
      heading: 'Places skied',
      items: ['Whistler Blackcomb, BC', 'Vail, CO', 'Jackson Hole, WY'],
    },
  },
  {
    slug: 'soccer',
    title: 'Soccer',
    thought: 'The beautiful game — playing it, watching it, arguing about it.',
  },
  {
    slug: 'cooking',
    title: 'Cooking',
    thought: 'Treating the kitchen as a place to make things with my hands.',
  },
  {
    slug: 'kazland',
    title: 'Kazland',
    thought: 'An artist on heavy rotation. Worth a listen.',
  },
  {
    slug: 'magic-the-gathering',
    title: 'Magic: The Gathering',
    thought: 'Twenty years of cardboard and still finding new lines.',
  },
  {
    slug: 'dnd',
    title: 'Dungeons & Dragons',
    thought: 'Friends around a table, telling stories one roll at a time.',
  },
]
