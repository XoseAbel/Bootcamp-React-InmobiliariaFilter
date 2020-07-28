interface resultApiInterface {
  properties: null | {}[];
  error: null | string;
}
interface propertiesInterface {
  properties: null | {}[];
  loading: boolean;
}

interface filterInterface {
  rooms: string[];
  bath: string[];
  parking: string[];
  type: string[];
  availableFilter?: {
    rooms?: string[];
    bath?: string[];
    parking?: string[];
    type?: string[];
  };
}

export { resultApiInterface, propertiesInterface, filterInterface };
