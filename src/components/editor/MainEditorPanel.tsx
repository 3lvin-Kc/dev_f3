import { useState, useEffect, useRef } from "react";
import Editor, { type Monaco } from '@monaco-editor/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { File, Smartphone } from "lucide-react";
import { PreviewPanel } from "@/components/PreviewPanel";

// Define GitHub Light theme
const defineGitHubTheme = (monaco: Monaco) => {
  monaco.editor.defineTheme('github-light', {
    base: 'vs',
    inherit: true,
    rules: [
      { token: 'comment', foreground: '6a737d', fontStyle: 'italic' },
      { token: 'keyword', foreground: 'd73a49' },
      { token: 'string', foreground: '032f62' },
      { token: 'number', foreground: '005cc5' },
      { token: 'type', foreground: '6f42c1' },
      { token: 'function', foreground: '6f42c1' },
      { token: 'variable', foreground: '24292e' },
      { token: 'class.name', foreground: '6f42c1' },
      { token: 'tag', foreground: '22863a' },
      { token: 'attribute.name', foreground: '6f42c1' },
      { token: 'attribute.value', foreground: '032f62' },
      { token: 'delimiter', foreground: '586069' },
      { token: 'delimiter.html', foreground: '22863a' },
      { token: 'delimiter.xml', foreground: '22863a' },
      { token: 'operator', foreground: 'd73a49' },
      { token: 'regex', foreground: '22863a' },
      { token: 'annotation', foreground: '6f42c1' },
      { token: 'meta', foreground: 'e36209' },
      { token: 'meta.return', foreground: 'd73a49' },
      { token: 'meta.preprocessor', foreground: '6a737d' },
      { token: 'pre', foreground: '24292e' },
      { token: 'support', foreground: '032f62' },
      { token: 'support.type', foreground: '6f42c1' },
      { token: 'support.function', foreground: '6f42c1' },
      { token: 'support.constant', foreground: '005cc5' },
      { token: 'support.variable', foreground: '6f42c1' },
      { token: 'support.class', foreground: '6f42c1' },
      { token: 'support.other', foreground: '032f62' },
      { token: 'entity.name.function', foreground: '6f42c1' },
      { token: 'entity.name.class', foreground: '6f42c1' },
      { token: 'entity.name.tag', foreground: '22863a' },
      { token: 'entity.other.attribute-name', foreground: '6f42c1' },
      { token: 'entity.other.inherited-class', foreground: '6f42c1' },
      { token: 'source', foreground: '24292e' },
      { token: 'source.css', foreground: '24292e' },
      { token: 'source.scss', foreground: '24292e' },
      { token: 'source.less', foreground: '24292e' },
      { token: 'source.sass', foreground: '24292e' },
      { token: 'source.json', foreground: '24292e' },
      { token: 'source.yaml', foreground: '24292e' },
      { token: 'text.html.basic', foreground: '24292e' },
      { token: 'text.html.derivative', foreground: '24292e' },
      { token: 'text.xml', foreground: '24292e' },
      { token: 'text.jade', foreground: '24292e' },
      { token: 'text.pug', foreground: '24292e' },
      { token: 'text.markdown', foreground: '24292e' },
      { token: 'constant', foreground: '005cc5' },
      { token: 'constant.character', foreground: '005cc5' },
      { token: 'constant.character.escape', foreground: '005cc5' },
      { token: 'constant.language', foreground: '005cc5' },
      { token: 'constant.numeric', foreground: '005cc5' },
      { token: 'constant.other', foreground: '005cc5' },
      { token: 'variable.language', foreground: 'd73a49' },
      { token: 'variable.other', foreground: '24292e' },
      { token: 'punctuation.definition.comment', foreground: '6a737d', fontStyle: 'italic' },
      { token: 'punctuation.definition.string', foreground: '032f62' },
      { token: 'punctuation.definition.variable', foreground: 'd73a49' },
      { token: 'punctuation.definition.parameters', foreground: '24292e' },
      { token: 'punctuation.definition.heading', foreground: '22863a' },
      { token: 'punctuation.definition.list', foreground: '22863a' },
      { token: 'punctuation.definition.strong', foreground: '22863a' },
      { token: 'punctuation.definition.emphasis', foreground: '22863a' },
      { token: 'punctuation.definition.link', foreground: '22863a' },
      { token: 'punctuation.definition.tag', foreground: '22863a' },
      { token: 'punctuation.definition.tag.html', foreground: '22863a' },
      { token: 'punctuation.definition.tag.xml', foreground: '22863a' },
      { token: 'punctuation.definition.begin', foreground: '22863a' },
      { token: 'punctuation.definition.end', foreground: '22863a' },
      { token: 'invalid', foreground: 'b31d28', background: 'ffeef0' },
      { token: 'invalid.deprecated', foreground: 'b31d28', background: 'ffeef0' },
      { token: 'invalid.unimplemented', foreground: 'b31d28', background: 'ffeef0' },
    ],
    colors: {
      'editor.background': '#ffffff',
      'editor.foreground': '#24292e',
      'editor.lineHighlightBackground': '#f6f8fa',
      'editor.selectionBackground': '#0366d625',
      'editor.inactiveSelectionBackground': '#0366d615',
      'editorCursor.foreground': '#044289',
      'editorWhitespace.foreground': '#d1d5da',
      'editorIndentGuide.background': '#e1e4e8',
      'editorIndentGuide.activeBackground': '#d7dbe0',
      'editorLineNumber.foreground': '#1b1f234d',
      'editorLineNumber.activeForeground': '#1b1f23',
      'editorLink.activeForeground': '#0366d6',
      'editor.findMatchBackground': '#fffbdd',
      'editor.findMatchHighlightBackground': '#ffe570',
      'editorHoverHighlightBackground': '#f0f8fc',
      'editor.lineHighlightBorder': '#e1e4e8',
      'editorOverviewRuler.border': '#e1e4e8',
      'editorOverviewRuler.findMatchForeground': '#ffd700',
      'editorOverviewRuler.rangeHighlightForeground': '#ffd700',
      'editorOverviewRuler.selectionForeground': '#0366d6',
      'editorOverviewRuler.wordHighlightForeground': '#ffd700',
      'editorRuler.foreground': '#e1e4e8',
      'editorSuggestWidget.background': '#ffffff',
      'editorSuggestWidget.border': '#e1e4e8',
      'editorSuggestWidget.foreground': '#24292e',
      'editorSuggestWidget.highlightForeground': '#0366d6',
      'editorSuggestWidget.selectedBackground': '#f6f8fa',
      'editorWidget.background': '#ffffff',
      'editorWidget.border': '#e1e4e8',
      'editorWidget.foreground': '#24292e',
      'input.background': '#ffffff',
      'input.border': '#e1e4e8',
      'input.foreground': '#24292e',
      'input.placeholderForeground': '#6a737d',
      'inputValidation.errorBackground': '#ffeef0',
      'inputValidation.errorBorder': '#b31d28',
      'inputValidation.warningBackground': '#fff5b4',
      'inputValidation.warningBorder': '#d7a600',
      'progressBar.background': '#0366d6',
      'widget.shadow': '#00000026',
      'sideBar.background': '#ffffff',
      'sideBar.foreground': '#24292e',
      'sideBar.border': '#e1e4e8',
      'sideBarTitle.foreground': '#24292e',
      'sideBarSectionHeader.background': '#f6f8fa',
      'sideBarSectionHeader.border': '#e1e4e8',
      'sideBarSectionHeader.foreground': '#24292e',
      'list.activeSelectionBackground': '#f6f8fa',
      'list.activeSelectionForeground': '#24292e',
      'list.focusBackground': '#f6f8fa',
      'list.focusForeground': '#24292e',
      'list.highlightForeground': '#0366d6',
      'list.hoverBackground': '#f6f8fa',
      'list.hoverForeground': '#24292e',
      'list.inactiveFocusBackground': '#f6f8fa',
      'list.inactiveFocusOutline': '#e1e4e8',
      'list.inactiveSelectionBackground': '#f6f8fa',
      'list.inactiveSelectionForeground': '#24292e',
      'tab.activeBackground': '#ffffff',
      'tab.activeForeground': '#24292e',
      'tab.border': '#e1e4e8',
      'tab.inactiveBackground': '#f6f8fa',
      'tab.inactiveForeground': '#586069',
      'tab.unfocusedActiveBackground': '#ffffff',
      'tab.unfocusedActiveForeground': '#24292e',
      'tab.unfocusedInactiveBackground': '#f6f8fa',
      'tab.unfocusedInactiveForeground': '#586069',
      'statusBar.background': '#ffffff',
      'statusBar.border': '#e1e4e8',
      'statusBar.foreground': '#24292e',
      'statusBar.noFolderBackground': '#ffffff',
      'statusBar.debuggingBackground': '#f9826c',
      'statusBar.debuggingForeground': '#ffffff',
      'statusBarItem.hoverBackground': '#f6f8fa',
      'titleBar.activeBackground': '#ffffff',
      'titleBar.activeForeground': '#24292e',
      'titleBar.border': '#e1e4e8',
      'titleBar.inactiveBackground': '#ffffff',
      'titleBar.inactiveForeground': '#586069',
      'activityBar.background': '#ffffff',
      'activityBar.border': '#e1e4e8',
      'activityBar.foreground': '#24292e',
      'activityBarBadge.background': '#0366d6',
      'activityBarBadge.foreground': '#ffffff',
      'panel.background': '#ffffff',
      'panel.border': '#e1e4e8',
      'panelTitle.activeBorder': '#0366d6',
      'panelTitle.activeForeground': '#24292e',
      'panelTitle.inactiveForeground': '#586069',
      //'panel.border': '#e1e4e8',
      'panel.dropBackground': '#f6f8fa',
      'dropdown.background': '#ffffff',
      'dropdown.border': '#e1e4e8',
      'dropdown.foreground': '#24292e',
      'badge.background': '#0366d6',
      'badge.foreground': '#ffffff',
      'button.background': '#fafbfc',
      'button.border': '#e1e4e8',
      'button.foreground': '#24292e',
      'button.hoverBackground': '#f3f4f6',
      'button.secondaryBackground': '#fafbfc',
      'button.secondaryForeground': '#24292e',
      'button.secondaryHoverBackground': '#f3f4f6',
      'checkbox.background': '#ffffff',
      'checkbox.border': '#d1d5da',
      'checkbox.foreground': '#24292e',
      'diffEditor.insertedTextBackground': '#e6ffed',
      'diffEditor.removedTextBackground': '#ffeef0',
      'diffEditor.border': '#e1e4e8',
      'diffEditor.diagonalFill': '#e1e4e8',
      'diffEditor.insertedLineBackground': '#e6ffed',
      'diffEditor.removedLineBackground': '#ffeef0',
      'scrollbar.shadow': '#00000026',
      'scrollbarSlider.background': '#e1e4e8',
      'scrollbarSlider.activeBackground': '#c3c6cc',
      'scrollbarSlider.hoverBackground': '#c3c6cc',
      'editorGutter.background': '#ffffff',
      'editorGutter.border': '#e1e4e8',
      'editorGutter.modifiedBackground': '#0366d6',
      'editorGutter.addedBackground': '#28a745',
      'editorGutter.deletedBackground': '#d73a49',
      'minimap.background': '#ffffff',
      'minimap.selectionHighlight': '#0366d6',
      'minimap.errorHighlight': '#d73a49',
      'minimap.warningHighlight': '#d7a600',
      'minimap.findMatchHighlight': '#ffd700',
      'minimapSlider.background': '#e1e4e8',
      'minimapSlider.activeBackground': '#c3c6cc',
      'minimapSlider.hoverBackground': '#c3c6cc',
      'problemsErrorIcon.foreground': '#d73a49',
      'problemsWarningIcon.foreground': '#d7a600',
      'problemsInfoIcon.foreground': '#0366d6',
      'peekView.background': '#ffffff',
      'peekView.border': '#e1e4e8',
      'peekViewTitle.background': '#f6f8fa',
      'peekViewTitleDescription.foreground': '#586069',
      'peekViewEditor.background': '#ffffff',
      'peekViewEditor.matchHighlightBackground': '#ffd700',
      'peekViewEditorGutter.background': '#ffffff',
      'peekViewResult.background': '#f6f8fa',
      'peekViewResult.fileForeground': '#24292e',
      'peekViewResult.lineForeground': '#586069',
      'peekViewResult.matchHighlightBackground': '#ffd700',
      'peekViewResult.selectionBackground': '#0366d615',
      'peekViewResult.selectionForeground': '#24292e',
      'peekViewTitleLabel.foreground': '#24292e',
    }
  });
};

interface MainEditorPanelProps {
  project: any | null;
  selectedFile: string;
  isBuilding: boolean;
  isCodeEditable: boolean;
  editorContent: string;
  hasUnsavedChanges: boolean;
  isStreaming?: boolean;
  streamingContent?: string;
  previewCode?: string; // Composed Dart code for DartPad preview
  onPreviewLoad?: (success: boolean) => void; // Callback when preview loads
  getFileLanguage: (filename: string) => string;
  handleEditorChange: (value: string | undefined) => void;
  saveCurrentFile: () => Promise<void>;
  setIsCodeEditable: (editable: boolean) => void;
}

export const MainEditorPanel = ({
  project,
  selectedFile,
  isBuilding,
  isCodeEditable,
  editorContent,
  hasUnsavedChanges,
  isStreaming = false,
  streamingContent = '',
  previewCode,
  onPreviewLoad,
  getFileLanguage,
  handleEditorChange,
  saveCurrentFile,
  setIsCodeEditable
}: MainEditorPanelProps) => {
  const editorRef = useRef<any>(null);
  
  // Determine which content to display
  const displayContent = isStreaming && streamingContent ? streamingContent : editorContent;

  // Auto-scroll to end during streaming
  useEffect(() => {
    if (isStreaming && editorRef.current) {
      const editor = editorRef.current;
      const model = editor.getModel();
      if (model) {
        const lineCount = model.getLineCount();
        editor.revealLine(lineCount, 0); // Smooth scroll to bottom
        
        // Set cursor to end
        const lastLineLength = model.getLineLength(lineCount);
        editor.setPosition({ lineNumber: lineCount, column: lastLineLength + 1 });
      }
    }
  }, [displayContent, isStreaming]);

  const handleEditorMount = (editor: any, monaco: Monaco) => {
    editorRef.current = editor;
    
    // Define and apply GitHub light theme
    defineGitHubTheme(monaco);
    monaco.editor.setTheme('github-light');
    
    // Add save command
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
      saveCurrentFile();
    });
    
    // Smooth scrolling configuration
    editor.updateOptions({
      smoothScrolling: true,
      cursorSmoothCaretAnimation: 'on',
    });
  };

  return (
    <div className="h-full flex flex-col glass-panel">
      <Tabs defaultValue="code" className="h-full flex flex-col">
        <div className="h-10 border-b px-3 flex items-center justify-between bg-background/50">
          <TabsList className="h-7 bg-muted/50">
            <TabsTrigger value="code" className="text-xs h-6 px-3 data-[state=active]:bg-background data-[state=active]:shadow-sm">
              <File className="w-3 h-3 mr-1" />
              Code
            </TabsTrigger>
            <TabsTrigger value="preview" className="text-xs h-6 px-3 data-[state=active]:bg-background data-[state=active]:shadow-sm">
              <Smartphone className="w-3 h-3 mr-1" />
              Preview
            </TabsTrigger>
          </TabsList>
          
          <div className="flex items-center gap-4">
            {selectedFile && (
              <div className="flex items-center gap-2">
                {hasUnsavedChanges && (
                  <div className="w-2 h-2 rounded-full bg-orange-500" title="Unsaved changes" />
                )}
                <span className="text-sm text-muted-foreground font-mono">{selectedFile}</span>
              </div>
            )}
            
            <div className="flex items-center gap-2">
              <Label htmlFor="editable-toggle" className="text-xs">
                Edit
              </Label>
              <Switch
                id="editable-toggle"
                checked={isCodeEditable}
                onCheckedChange={setIsCodeEditable}
              />
            </div>
          </div>
        </div>

        <TabsContent value="code" className="flex-1 m-0">
          <div className="h-full">
            {project && !isBuilding && selectedFile ? (
              <>
                {isStreaming && (
                  <div className="absolute top-2 right-2 z-10 flex items-center gap-2 bg-yellow-500/10 text-yellow-600 border border-yellow-500/20 px-3 py-1.5 rounded-md text-xs font-medium">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
                    Generating code...
                  </div>
                )}
                <Editor
                  height="100%"
                  language={getFileLanguage(selectedFile)}
                  value={displayContent}
                  onChange={handleEditorChange}
                  theme="vs-light"
                  options={{
                    minimap: { enabled: false },
                    fontSize: 14,
                    fontFamily: 'JetBrains Mono, Monaco, Consolas, "Courier New", monospace',
                    lineNumbers: 'on',
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                    readOnly: !isCodeEditable || isStreaming,
                    wordWrap: 'on',
                    folding: true,
                    renderLineHighlight: 'line',
                    selectionHighlight: true,
                    occurrencesHighlight: "singleFile",
                    bracketPairColorization: { enabled: true },
                    smoothScrolling: true,
                    cursorBlinking: isStreaming ? 'solid' : 'smooth',
                    cursorSmoothCaretAnimation: 'on',
                    formatOnPaste: true,
                    formatOnType: true,
                    tabSize: 2,
                    insertSpaces: true,
                    detectIndentation: true
                  }}
                  onMount={handleEditorMount}
                />
              </>
            ) : (
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <File className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
                  <p className="text-sm text-muted-foreground mb-2">
                    {isBuilding ? 'Generating your widget...' : 'No files to edit'}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Create or generate files to start coding
                  </p>
                </div>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="preview" className="flex-1 m-0">
          <PreviewPanel 
            code={previewCode || editorContent}
            onPreviewLoad={onPreviewLoad}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};