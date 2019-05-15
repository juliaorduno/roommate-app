import React from 'react';
import PropTypes from 'prop-types';
import MainCard from '../../MainCard'
import {Highlight, InformationColumn, GroupCodeContainer, MembersContainer} from '../../styles'
import GroupCode from './GroupCode'
import Members from './Members'

const GroupInfoCard = ({ groupCode, members }) => (
  <MainCard title={<Highlight>House Group</Highlight>}>
    <InformationColumn>
      <MembersContainer>
        <Members members={members} />
      </MembersContainer>
    </InformationColumn>
    <InformationColumn>
      <GroupCodeContainer>
        <GroupCode groupCode={groupCode} />
      </GroupCodeContainer>
    </InformationColumn>
  </MainCard>
);

GroupInfoCard.displayName = 'GroupInfoCard';

GroupInfoCard.propTypes = {
  groupCode: PropTypes.string,
  members: PropTypes.node
};

GroupInfoCard.defaultProps = {
  groupCode: 'No code to display',
  members: null
};

export default GroupInfoCard;