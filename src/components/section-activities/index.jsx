import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionActivities = ({ activities }) => {
  if (!activities.length) return null;

  return (
    <Section title="Activities">
      {activities.map((activity) => (
        <SummaryItem
          key={activity.name}
          name={activity.name}
          description={activity.description}
          link={activity.link}
          techStack={activity.techStack}
          location={activity.location}
        />
      ))}
    </Section>
  );
};

export default SectionActivities;
