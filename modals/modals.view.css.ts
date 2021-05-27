namespace $.$$ {
	
	const { rem } = $mol_style_unit
	
	$mol_style_define( $my_vkbench_modals, {
		
		Sample: {
			flex: {
				basis: rem(30),
			},
		},
		
		Filters: {
			
			flex: {
				basis: rem(30),
			},
			
			$mol_form_field: {
				margin: $mol_gap.block,
			},
			
		},
		
		Info: {
			
			flex: {
				basis: rem(30),
			},
			
			$mol_labeler: {
				margin: $mol_gap.block,
			},
			
		},
		
	} )
	
}
