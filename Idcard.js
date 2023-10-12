import images from './images/images.jpg'
export default function Idcard()
{
    return (
        <form>
<table align="center"  cellspacing="0">
<tr>
	<td align="center" style={{color:"red"}}><h2>KONERU LAKSHMAIAH EDUCATION FOUNDATION</h2></td>
</tr>
	<tr><td align="center" style={{color:"green"}}><h3>IDENTITY CARD</h3></td></tr>
<tr>
	<td align="center"><img src={images} style={{height:"300px",witdh:"200px"}} /></td>
</tr>
<tr><br></br></tr>
<tr> <td align="center" style={{color:"blue"}}><b> STUDENTID : 31766 </b></td></tr>
<tr><td><br></br></td></tr>
<tr> <td align="center"><b> POLURI SHANMUKHI LAKSHMI SAMATHA </b></td></tr>
<tr><td><br></br></td></tr>
<tr> <td align="center"><b> CSE </b></td></tr>

</table>
</form>
    )
}