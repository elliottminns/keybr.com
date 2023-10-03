import { KeyDetailsChart } from "@keybr/chart";
import { LearningRate, LessonKey, timeToConfidence } from "@keybr/lesson";
import { Letter } from "@keybr/phonetic-model";
import { type ReactNode } from "react";
import * as styles from "./KeyDetailsChartDemo.module.less";

export function KeyDetailsChartDemo(): ReactNode {
  const lessonKey = new LessonKey({
    letter: new Letter(/* a */ 0x61, 1),
    samples: [],
    timeToType: 380,
    bestTimeToType: 380,
    confidence: timeToConfidence(380),
    bestConfidence: timeToConfidence(380),
  });
  const learningRate = LearningRate.example();
  return (
    <div className={styles.component}>
      <KeyDetailsChart
        lessonKey={lessonKey}
        learningRate={learningRate}
        width="36rem"
        height="15rem"
      />
    </div>
  );
}
