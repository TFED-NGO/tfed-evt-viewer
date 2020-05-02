import { AttributesData, OriginalEncodingNodeType } from './evt-models';

export interface GenericElementData {
    type: string;
    path?: string;
    class?: string;
    attributes: AttributesData;
    content: GenericElementData[];
}

export type HTMLData = GenericElementData & {
    content: OriginalEncodingNodeType[];
};

export interface TextData extends GenericElementData {
    text: string;
}
export type NoteLayout = 'popover' | 'plain-text';
export type NoteData = GenericElementData & {
    noteLayout: NoteLayout;
    noteType: string;
    exponent: string;
};

export interface ParagraphData extends GenericElementData {
    n: string;
}

export interface LbData extends GenericElementData {
    id: string;
    n?: string;
    facs?: string; // Needed to handle ITL
    rend?: string;
}

export type CommentData = GenericElementData;
