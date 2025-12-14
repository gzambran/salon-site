export interface Service {
  name: string;
  description?: string;
  priceMin: number;
  priceMax?: number;
  icon?: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  services: Service[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'alisados',
    name: 'Alisados',
    services: [
      {
        name: 'Alisados temporales y permanentes',
        description: 'Alisados profesionales con productos de alta calidad',
        priceMin: 30,
        priceMax: 120,
      },
    ],
  },
  {
    id: 'tratamientos',
    name: 'Tratamientos',
    services: [
      {
        name: 'Tratamientos capilares',
        description: 'Hidratación, reconstrucción y nutrición profunda',
        priceMin: 25,
        priceMax: 50,
      },
      {
        name: 'Detox capilar',
        description: 'Limpieza profunda del cuero cabelludo',
        priceMin: 25,
      },
    ],
  },
  {
    id: 'cortes',
    name: 'Cortes',
    services: [
      {
        name: 'Cortes de cabello',
        description: 'Cortes modernos y clásicos para damas',
        priceMin: 5,
        priceMax: 15,
      },
    ],
  },
  {
    id: 'color',
    name: 'Color',
    services: [
      {
        name: 'Tintes',
        description: 'Coloración profesional con productos premium',
        priceMin: 20,
        priceMax: 45,
      },
      {
        name: 'Balayage y mechas',
        description: 'Técnicas avanzadas de iluminación',
        priceMin: 40,
        priceMax: 100,
      },
    ],
  },
  {
    id: 'maquillaje',
    name: 'Maquillaje y Peinados',
    services: [
      {
        name: 'Maquillaje profesional',
        description: 'Maquillaje para eventos especiales',
        priceMin: 15,
      },
      {
        name: 'Peinados',
        description: 'Peinados elegantes para toda ocasión',
        priceMin: 10,
        priceMax: 25,
      },
    ],
  },
  {
    id: 'facial',
    name: 'Cuidado Facial',
    services: [
      {
        name: 'Limpiezas faciales',
        description: 'Limpieza profunda y revitalización de la piel',
        priceMin: 20,
        priceMax: 35,
      },
    ],
  },
];

export interface ProductBrand {
  name: string;
  description: string;
  category: 'corte' | 'color' | 'tratamientos';
}

export const productBrands: ProductBrand[] = [
  // Corte
  {
    name: 'Alfaparf',
    description: 'Productos de preparación y acabado profesional',
    category: 'corte',
  },
  {
    name: 'Protectores térmicos',
    description: 'Marcas americanas de alta protección',
    category: 'corte',
  },
  // Color
  {
    name: 'Alfaparf Milano',
    description: 'Evolution of the Color, tonalizantes y Semi de Lino',
    category: 'color',
  },
  {
    name: 'Wella Color Charm',
    description: 'Mezclas personalizadas para dorados, cobrizos y rubios cálidos',
    category: 'color',
  },
  {
    name: 'Plex',
    description: 'Protección y reconstrucción durante la coloración',
    category: 'color',
  },
  {
    name: 'Nounou Alfaparf',
    description: 'Nutrición posterior al color',
    category: 'color',
  },
  // Tratamientos
  {
    name: 'Alfaparf Semi di Lino',
    description: 'Línea de reconstrucción, hidratación y brillo Diamond',
    category: 'tratamientos',
  },
  {
    name: 'Tratamientos de Célula Madre',
    description: 'Regeneración celular avanzada',
    category: 'tratamientos',
  },
  {
    name: 'Ampollas Alfaparf & E-cosmetics',
    description: 'Ojón, mirra, argán, keratina cistina y Semi di Lino',
    category: 'tratamientos',
  },
  {
    name: 'Olaplex',
    description: 'Protocolos profesionales de salón',
    category: 'tratamientos',
  },
];

export const contactInfo = {
  phone: 'PLACEHOLDER_PHONE', // PLACEHOLDER
  whatsapp: 'PLACEHOLDER_PHONE', // PLACEHOLDER - same as phone or different
  whatsappMessage: 'Hola, me gustaría agendar una cita en Susana Beauty Salón',
  address: 'Avenida Reales Tamarindo, Portoviejo, Ecuador',
  hours: 'PLACEHOLDER_HOURS', // PLACEHOLDER - e.g., 'Lun-Sab 10am-6pm'
  instagram: 'PLACEHOLDER_INSTAGRAM', // PLACEHOLDER
  facebook: 'PLACEHOLDER_FACEBOOK', // PLACEHOLDER
};
