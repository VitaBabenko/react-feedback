import { Component } from 'react';
import { Section } from './section/Section';
import { FeedbackOptions } from './feedbackOptions/FeedbackOptions';
import { Statistics } from './statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
}

  render() {
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions options={['good', 'neutral', 'bad']} />
        <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} />
    </Section>
  );
 }
};
