import { FieldExtensionSDK } from '@contentful/app-sdk';
import Editor from '@monaco-editor/react';

interface FieldProps {
  sdk: FieldExtensionSDK;
}

const Field = (props: FieldProps) => {
  // If you only want to extend Contentful's default editing experience
  // reuse Contentful's editor components
  // -> https://www.contentful.com/developers/docs/extensibility/field-editors/
  return <Editor height="84vh" defaultLanguage="html" value={props.sdk.field.getValue()} onChange={(val) => {
    props.sdk.field.setValue(val);
  }}/>;
};

export default Field;
