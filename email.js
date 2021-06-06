$('#un').keyup(function()
{
	let res=$(this).val();
	if(res.length<4) 
	{
		$(this).css({'background-color':'rgba(250,0,0,0.5)'});
		$('#strength').text('weak').css({'color':'red'});
	}
	else if(res.length<6) 
	{
		$(this).css({'background-color':'gold'});
		$('#strength').text('average').css({'color':'orange'});
	}
	else 
	{
		$(this).css({'background-color':'limegreen'});
		$('#strength').text('strong').css({'color':'limegreen'});
	}
});
$('#inp').keyup(function()
{
		let res=$(this).val();
		let s="",ss="",un1="",un2="";
		un=[];
		un.length=2;
		for(let i=0;i<res.length;i++)
		{
			if(!((res[i])===('@')))
			{
				un1+=res[i];
			}
			else
			{
				for(let j=i+1;j<res.length;j++)
				{
					un2+=res[j];
				}
				break;
			}
		}
		un[0]=un1;
		un[1]=un2;
		if(un[0].length<=5)
		{
			for(let i=0;i<un[0].length;i++)
			{
				s+="*";
			}
			s+="@"+un[1];
			
		}
		else
		{
			for(let i=0;i<3;i++)
			{
				ss+=res[i];
			}
			for(let i=3;i<un[0].length;i++)
			{
				s+="*";
			}
			s=ss+s+"@"+un[1];
		}
		$('#res').val(s);
});