"use client";
import { ChatMessageBar2 } from "@/subframe/components/ChatMessageBar2";
import { Accordion } from "@/subframe/components/Accordion";
import { TextField } from "@/subframe/components/TextField";
import { AiChatSuggestion } from "@/subframe/components/AiChatSuggestion";
import { Slider } from "@/subframe/components/Slider";
import { Switch } from "@/subframe/components/Switch";
import { DropdownMenu } from "@/subframe/components/DropdownMenu";
import * as SubframeCore from "@subframe/core";
import { Button } from "@/subframe/components/Button";

import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <div className="flex grow shrink-0 basis-0 flex-col items-center self-stretch rounded-[20px] w-full bg-default-background shadow-md">
      <div className="flex w-144 flex-col items-center gap-6 px-8 py-8 overflow-auto mobile:h-auto mobile:w-auto mobile:flex-none">
        <div className="flex w-full flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-1">
            <span className="text-heading-2 font-heading-2 text-default-font">
              Start a New Document
            </span>
            <span className="text-body font-body text-default-font">
              Hi there! Try asking me to write a draft.
            </span>
          </div>
          <ChatMessageBar2 className="w-full max-w-[768px] grow shrink-0 basis-0" />
        </div>
        <div className="flex w-full flex-col items-center gap-2">
          <div className="flex w-full flex-col items-start gap-4 rounded-md border border-solid border-brand-50 bg-default-background shadow-sm">
            <Accordion
              trigger={
                <div className="flex w-full items-center gap-2 px-4 py-4">
                  <span className="grow shrink-0 basis-0 text-body-bold font-body-bold text-default-font">
                    Configure SEO Keywords
                  </span>
                  <Accordion.Chevron />
                </div>
              }
            >
              <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-4 border-t border-solid border-brand-50 px-6 py-6">
                <div className="flex w-full flex-col items-start gap-2">
                  <TextField
                    className="h-auto w-full flex-none"
                    disabled={false}
                    error={false}
                    variant="filled"
                    label="Add a keyword to generate proposed search keywords. "
                    helpText=""
                    icon="FeatherSearchCode"
                    iconRight={null}
                  >
                    <TextField.Input
                      placeholder="Keyword"
                      value=""
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {}}
                    />
                  </TextField>
                  <span className="w-full text-body-bold font-body-bold text-default-font">
                    Suggested Keywords/Topics:
                  </span>
                  <div className="flex items-start gap-2">
                    <AiChatSuggestion text="Readings in Database..." />
                    <AiChatSuggestion text="Database design books PDF" />
                  </div>
                  <div className="flex items-start gap-2">
                    <AiChatSuggestion text="Relational database book pdf" />
                    <AiChatSuggestion text="Database books for beginners" />
                  </div>
                  <div className="flex items-start gap-2">
                    <AiChatSuggestion text="Build your own database from scratch in go PDF" />
                    <AiChatSuggestion text="Relational database books" />
                  </div>
                  <div className="flex items-start gap-2">
                    <AiChatSuggestion text="Database Design for Mere Mortals PDF github" />
                    <AiChatSuggestion text="Database Books reddit" />
                  </div>
                  <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-300" />
                  <div className="flex w-full flex-col items-start gap-6">
                    <div className="flex w-full flex-col items-start gap-1">
                      <span className="w-full text-body-bold font-body-bold text-default-font">
                        Article Personality
                      </span>
                      <span className="text-caption font-caption text-subtext-color">
                        Use the slider to choose the type of article personality
                        you want to create
                      </span>
                    </div>
                    <div className="flex w-full flex-col items-start gap-4">
                      <Slider
                        value={[]}
                        onValueChange={(value: number[]) => {}}
                        onValueCommit={(value: number[]) => {}}
                      />
                      <div className="flex w-full items-center justify-between">
                        <span className="text-caption font-caption text-subtext-color">
                          Corporate &amp; Serious
                        </span>
                        <span className="text-caption font-caption text-subtext-color">
                          Creative and Silly
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Accordion>
          </div>
          <div className="flex w-full flex-col items-start gap-4 rounded-md border border-solid border-brand-50 bg-default-background shadow-sm">
            <Accordion
              trigger={
                <div className="flex w-full items-center gap-2 px-4 py-4">
                  <span className="grow shrink-0 basis-0 text-body-bold font-body-bold text-default-font">
                    Document Settings
                  </span>
                  <Accordion.Chevron />
                </div>
              }
            >
              <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-4 border-t border-solid border-brand-50 px-6 py-6">
                <div className="flex w-full flex-col items-start gap-2">
                  <span className="w-full text-heading-3 font-heading-3 text-default-font">
                    Document Settings
                  </span>
                  <div className="flex w-full items-center gap-2">
                    <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                      <span className="w-full text-body-bold font-body-bold text-default-font">
                        Generate a share link to share with your team or public
                      </span>
                      <span className="w-full text-body font-body text-subtext-color">
                        If this toggled on you will generate a share link,
                        otherwise it will be private
                      </span>
                    </div>
                    <Switch
                      checked={false}
                      onCheckedChange={(checked: boolean) => {}}
                    />
                  </div>
                  <div className="flex w-full items-center gap-2">
                    <span className="grow shrink-0 basis-0 text-body-bold font-body-bold text-default-font">
                      Add to a Folder
                    </span>
                    <SubframeCore.DropdownMenu.Root>
                      <SubframeCore.DropdownMenu.Trigger asChild={true}>
                        <Button
                          variant="neutral-secondary"
                          iconRight="FeatherChevronDown"
                          onClick={(
                            event: React.MouseEvent<HTMLButtonElement>
                          ) => {}}
                        >
                          Choose folder
                        </Button>
                      </SubframeCore.DropdownMenu.Trigger>
                      <SubframeCore.DropdownMenu.Portal>
                        <SubframeCore.DropdownMenu.Content
                          side="bottom"
                          align="start"
                          sideOffset={4}
                          asChild={true}
                        >
                          <DropdownMenu>
                            <DropdownMenu.DropdownItem icon="FeatherFolderOpen">
                              Folder 1
                            </DropdownMenu.DropdownItem>
                            <DropdownMenu.DropdownItem icon="FeatherFolderOpen">
                              Folder 2
                            </DropdownMenu.DropdownItem>
                            <DropdownMenu.DropdownItem icon="FeatherFolderOpen">
                              Folder 3
                            </DropdownMenu.DropdownItem>
                          </DropdownMenu>
                        </SubframeCore.DropdownMenu.Content>
                      </SubframeCore.DropdownMenu.Portal>
                    </SubframeCore.DropdownMenu.Root>
                  </div>
                </div>
              </div>
            </Accordion>
          </div>
        </div>
        <Button
          disabled={false}
          variant="brand-primary"
          size="medium"
          icon="FeatherActivity"
          iconRight={null}
          loading={false}
          onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
            const newDocId = uuidv4();
            router.push(`/doc/${newDocId}`);
          }}
        >
          Generate Article and Create a New Document
        </Button>
      </div>
    </div>
  );
}
