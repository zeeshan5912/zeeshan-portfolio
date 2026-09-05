"use client";

import { useState, useCallback } from "react";

export function useClipboard(timeout = 2500) {
  const [copied, setCopied] = useState<boolean>(false);
  const [copiedText, setCopiedText] = useState<string>("");

  const copy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setCopiedText(text);
        setTimeout(() => {
          setCopied(false);
          setCopiedText("");
        }, timeout);
        return true;
      } catch (err) {
        console.error("Failed to copy to clipboard:", err);
        setCopied(false);
        return false;
      }
    },
    [timeout]
  );

  return { copied, copiedText, copy };
}
