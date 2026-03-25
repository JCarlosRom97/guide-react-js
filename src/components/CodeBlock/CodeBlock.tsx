import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const CodeBlock = ({ code }: { code: string }) => {
  return (
    <div
      style={{
        width: '100%',
        margin: '20px 0',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
      }}
    >
      <SyntaxHighlighter
        language="tsx"
        style={vscDarkPlus}
        showLineNumbers
        wrapLongLines
        customStyle={{
          margin: 0,
          padding: '20px',
          fontSize: '14px',
          lineHeight: '1.5',
          background: '#1e1e1e',
        }}
        codeTagProps={{
          style: {
            fontFamily: 'Fira Code, monospace',
          },
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};