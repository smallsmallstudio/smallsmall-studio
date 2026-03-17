export default {
  name: 'work',
  title: 'Work',
  type: 'document',
  fields: [
    { name: 'name',        type: 'string', title: 'Name' },
    { name: 'type',        type: 'string', title: 'Type (Stool, Floor Lamp…)' },
    { name: 'year',        type: 'number', title: 'Year' },
    { name: 'material',    type: 'text',   title: 'Material' },
    { name: 'description', type: 'text',   title: 'Description' },
    { name: 'image',       type: 'image',  title: 'Photo', options: { hotspot: true } },
    { name: 'dimH',        type: 'string', title: 'Height (cm)' },
    { name: 'dimW',        type: 'string', title: 'Width (cm)' },
    { name: 'dimD',        type: 'string', title: 'Depth / Ø (cm)' },
    { name: 'order',       type: 'number', title: 'Order in index' },
  ]
}