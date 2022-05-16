export interface ListBooks {
  count: number;
  next: string;
  previous: null;
  results: Book[];
}

export interface Book {
  id: number;
  type: ResultType;
  title: string;
  description: null | string;
  downloads: number;
  license: string;
  subjects: string[];
  bookshelves: string[];
  languages: Language[];
  agents: Agent[];
  resources: Resource[];
}

export interface Agent {
  id: number;
  person: string;
  type: AgentType;
}

export enum AgentType {
  Author = "Author",
}

export enum Language {
  En = "en",
}

export interface Resource {
  id: number;
  uri: string;
  type: ResourceType;
}

export enum ResourceType {
  ApplicationEpubZip = "application/epub+zip",
  ApplicationRDFXML = "application/rdf+xml",
  ApplicationXMobipocketEbook = "application/x-mobipocket-ebook",
  ApplicationZip = "application/zip",
  ImageJPEG = "image/jpeg",
  TextHTMLCharsetISO88591 = "text/html; charset=iso-8859-1",
  TextHTMLCharsetUTF8 = "text/html; charset=utf-8",
  TextPlainCharsetUTF8 = "text/plain; charset=utf-8",
}

export enum ResultType {
  Text = "Text",
}
