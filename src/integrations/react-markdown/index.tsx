import type { ComponentProps } from "react";
import MarkdownPrimitive from "react-markdown";

import { omit } from "~/-utils";
import { Anchor } from "~/components/anchor";
import { Code } from "~/components/code";
import { Heading } from "~/components/heading";
import { InlineCode } from "~/components/inline-code";
import { Separator } from "~/components/separator";
import { Text } from "~/components/text";
import { View } from "~/components/view";

import styles from "./react-markdown.module.css";

export function Markdown({
  components,
  children,
  ...props
}: ComponentProps<typeof MarkdownPrimitive> & { children: string }) {
  return (
    <MarkdownPrimitive
      {...props}
      components={{
        h1: (props) => (
          <Heading
            {...omit(props, ["node"])}
            level={1}
            className={styles["react-markdown__h1"]}
          />
        ),
        h2: (props) => (
          <Heading
            {...omit(props, ["node"])}
            level={2}
            className={styles["react-markdown__h2"]}
          />
        ),
        h3: (props) => (
          <Heading
            {...omit(props, ["node"])}
            level={3}
            className={styles["react-markdown__h3"]}
          />
        ),
        h4: (props) => (
          <Heading
            {...omit(props, ["node"])}
            level={4}
            className={styles["react-markdown__h4"]}
          />
        ),
        h5: (props) => (
          <Heading
            {...omit(props, ["node"])}
            level={5}
            className={styles["react-markdown__h5"]}
          />
        ),
        p: (props) => (
          <Text
            {...omit(props, ["node"])}
            multiline
            className={styles["react-markdown__p"]}
          />
        ),
        hr: () => <Separator />,
        ul: (props) => (
          <ul
            {...omit(props, ["node"])}
            className={styles["react-markdown__ul"]}
          />
        ),
        ol: (props) => (
          <ul
            {...omit(props, ["node"])}
            className={styles["react-markdown__ol"]}
          />
        ),
        li: (props) => (
          <li
            {...omit(props, ["node"])}
            className={styles["react-markdown__li"]}
          />
        ),
        a: ({ href, ...props }) => (
          <Anchor
            {...omit(props, ["node"])}
            href={href}
            {...(isExternal(href)
              ? {
                  target: "_blank",
                  rel: "noreferrer",
                }
              : {})}
          />
        ),
        code: ({ className, ...props }) => {
          if (
            typeof props.children === "string" &&
            !props.children.includes("\n")
          ) {
            return <InlineCode {...omit(props, ["node"])} />;
          }

          return (
            <Code
              className={styles["react-markdown__code"]}
              {...omit(props, ["node"])}
              language={getLanguage(className)}
            />
          );
        },
        img: ({ alt, ...props }) => (
          <View className={styles["react-markdown__img-root"]}>
            <img
              {...omit(props, ["node"])}
              alt={alt}
              className={styles["react-markdown__img"]}
            />
            {alt ? (
              <Text size="sm" color="dimmer" multiline>
                {alt}
              </Text>
            ) : null}
          </View>
        ),
        ...components,
      }}
    >
      {children}
    </MarkdownPrimitive>
  );
}

function getLanguage(className: string = "") {
  const language = (/language-(\w+)/.exec(className) || [])[0];
  return language ? language.substring("language-".length) : "text";
}

function isExternal(href?: string) {
  return href?.startsWith("https://");
}
