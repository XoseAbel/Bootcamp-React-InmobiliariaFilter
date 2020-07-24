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
  set: any | null;
}

export { resultApiInterface, propertiesInterface, filterInterface };
