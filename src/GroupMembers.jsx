
function GroupMembers() {
  const members = ['Natnael Worku','Abebaw', 'Meskerem', 'Natnael', 'Yadiel',  'Mesud', 'Meti', 'nebiyu', 'Rahmet'];

  return (
    <div>
      <h1>Group Members</h1>
      <ol>
        {members.map((member, index) => (
          <li key={index}>{member}</li>
        )
        )}
      </ol>
    </div>
  )
}

export default GroupMembers