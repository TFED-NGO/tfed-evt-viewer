import { Map } from '../utils/js-utils';
import { GenericElementData } from './parsed-elements';

export type XMLElement = HTMLElement;
export type OriginalEncodingNodeType = XMLElement;

export interface EditionStructure {
    pages: Map<PageData>;
    pagesIndexes: string[];
}

export interface PageData {
    id: string;
    label: string;
    originalContent: OriginalEncodingNodeType[];
    parsedContent: GenericElementData[];
}

export interface NamedEntities {
    persons: {
        lists: NamedEntitiesList[];
        entities: NamedEntity[];
    };
    places: {
        lists: NamedEntitiesList[];
        entities: NamedEntity[];
    };
    organizations: {
        lists: NamedEntitiesList[];
        entities: NamedEntity[];
    };
    relations: Relation[];
    events: {
        lists: NamedEntitiesList[];
        entities: NamedEntity[];
    };
}

export type AttributesData = Array<{ key: string; value: string }>;

export interface OriginalEncodingData {
    originalEncoding: OriginalEncodingNodeType;
}

export type NamedEntityType = 'person' | 'personGrp' | 'place' | 'org' | 'relation' | 'event' | 'generic';
export type NamedEntitiesList = OriginalEncodingData & {
    id: string;
    label: string;
    type: NamedEntityType;
    icon?: string;
    description?: Description;
    attributes?: AttributesData;
    sublists: NamedEntitiesList[];
    entities: NamedEntity[];
    relations: Relation[];
};

export type NamedEntity = OriginalEncodingData & {
    id: string;
    label: string;
    type: NamedEntityType;
    info: NamedEntityInfo[];
    attributes?: AttributesData;
    occurrences: string[]; // TODO: evaluate which type assign
};

export interface NamedEntityInfo {
    label: string;
    value: GenericElementData;
    icon?: string;
    attributes?: AttributesData;
}

export type Relation = OriginalEncodingData & {
    name?: string;
    activeParts: string[]; // Pointers to entities involved in relation
    mutualParts: string[]; // Pointers to entities involved in relation
    passiveParts: string[]; // Pointers to entities involved in relation
    description?: Description | string;
    type?: string;
};

export type Description = GenericElementData[];
