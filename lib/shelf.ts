export interface ShelfItem {
  title: string
  creator: string
  type: 'book' | 'film' | 'podcast'
  coverColor: string
  note?: string
}

export const shelf: ShelfItem[] = [
  { title: 'The Creative Act', creator: 'Rick Rubin', type: 'book', coverColor: '#0f0e0d' },
  { title: 'Thinking Fast and Slow', creator: 'Daniel Kahneman', type: 'book', coverColor: '#120f0f' },
  { title: 'Arrival', creator: 'Denis Villeneuve', type: 'film', coverColor: '#0d1014' },
  { title: 'Dune', creator: 'Denis Villeneuve', type: 'film', coverColor: '#14100c' },
  { title: 'My Brilliant Friend', creator: 'Elena Ferrante', type: 'book', coverColor: '#0e0f12' },
  { title: 'The Knowledge Project', creator: 'Shane Parrish', type: 'podcast', coverColor: '#0f0f0f' },
]
